import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface ProjectSubmission {
  day: number;
  title: string;
  repoUrl: string;
  description: string;
  techStack: string[];
  aiFeedback?: string;
  submittedAt: string;
  status: 'pending' | 'completed' | 'needs-work';
}

interface ChallengeContextType {
  currentDay: number;
  streak: number;
  submissions: ProjectSubmission[];
  username: string;
  setUsername: (name: string) => void;
  addSubmission: (sub: ProjectSubmission) => void;
  getSubmissionForDay: (day: number) => ProjectSubmission | undefined;
  completionRate: number;
}

const ChallengeContext = createContext<ChallengeContextType | null>(null);

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState('Builder');
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('abtalks_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    try {
      localStorage.setItem('abtalks_submissions', JSON.stringify(submissions));
    } catch {
      // ignore
    }
    const maxDay = submissions.length > 0 ? Math.max(...submissions.map(s => s.day)) : 0;
    setCurrentDay(Math.min(maxDay + 1, 60));
  }, [submissions]);

  const streak = (() => {
    if (submissions.length === 0) return 0;
    const sorted = [...submissions].sort((a, b) => b.day - a.day);
    let s = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].day === 60 - i) s++;
      else break;
    }
    return s;
  })();

  const addSubmission = useCallback((sub: ProjectSubmission) => {
    setSubmissions(prev => {
      const filtered = prev.filter(p => p.day !== sub.day);
      return [...filtered, sub];
    });
  }, []);

  const getSubmissionForDay = useCallback((day: number) => {
    return submissions.find(s => s.day === day);
  }, [submissions]);

  const setUsername = useCallback((name: string) => {
    setUsernameState(name);
    try {
      localStorage.setItem('abtalks_username', name);
    } catch {
      // ignore
    }
  }, []);

  const completionRate = submissions.length > 0 ? (submissions.length / 60) * 100 : 0;

  return (
    <ChallengeContext.Provider value={{
      currentDay, streak, submissions, username,
      setUsername, addSubmission, getSubmissionForDay, completionRate
    }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export const useChallenge = () => {
  const ctx = useContext(ChallengeContext);
  if (!ctx) throw new Error('useChallenge must be used within ChallengeProvider');
  return ctx;
};