import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { CHALLENGE_DAYS, STUDENT_PROFILE, SUBMISSIONS } from '../data/mockData';
import type { ChallengeDay, StudentProfile, Submission } from '../types';

const STORAGE_KEY = 'abtalks_state_v1';

interface StoredState {
  profile: StudentProfile;
  days: ChallengeDay[];
  submissions: Submission[];
}

interface ChallengeContextValue extends StoredState {
  completionPct: number;
  getDay: (day: number) => ChallengeDay | undefined;
  getSubmission: (day: number) => Submission | undefined;
  submitDay: (submission: Omit<Submission, 'submittedAt'>) => void;
  resetToNewStudent: () => void;
}

const ChallengeContext = createContext<ChallengeContextValue | null>(null);

function loadInitial(): StoredState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      // fall through to defaults
    }
  }
  return { profile: STUDENT_PROFILE, days: CHALLENGE_DAYS, submissions: SUBMISSIONS };
}

export function ChallengeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const completionPct = useMemo(() => {
    const done = state.days.filter((d) => d.status === 'done').length;
    return Math.round((done / state.days.length) * 1000) / 10;
  }, [state.days]);

  const getDay = (day: number) => state.days.find((d) => d.day === day);
  const getSubmission = (day: number) => state.submissions.find((s) => s.day === day);

  const submitDay = (submission: Omit<Submission, 'submittedAt'>) => {
    setState((prev) => {
      const days = prev.days.map((d) => {
        if (d.day === submission.day) return { ...d, status: 'done' as const };
        if (d.day === submission.day + 1) return { ...d, status: 'today' as const };
        return d;
      });
      const submissions = [...prev.submissions.filter((s) => s.day !== submission.day), { ...submission, submittedAt: new Date().toISOString() }];
      const newStreak = prev.profile.currentStreak + 1;
      const profile: StudentProfile = {
        ...prev.profile,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.profile.longestStreak, newStreak),
        todayIndex: submission.day + 1,
      };
      return { days, submissions, profile };
    });
  };

  const resetToNewStudent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      profile: { ...STUDENT_PROFILE, currentStreak: 0, longestStreak: 0, todayIndex: 1, achievements: STUDENT_PROFILE.achievements.map((a) => ({ ...a, unlocked: false })) },
      days: CHALLENGE_DAYS.map((d) => ({ ...d, status: d.day === 1 ? 'today' : 'locked' })),
      submissions: [],
    });
  };

  return (
    <ChallengeContext.Provider value={{ ...state, completionPct, getDay, getSubmission, submitDay, resetToNewStudent }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallenge() {
  const ctx = useContext(ChallengeContext);
  if (!ctx) throw new Error('useChallenge must be used within ChallengeProvider');
  return ctx;
}