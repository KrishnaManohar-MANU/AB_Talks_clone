import type { ChallengeDay, StudentProfile, Submission } from '../types';

const TITLES = [
  'Build a habit tracker UI', 'Ship a REST API endpoint', 'Recreate a landing page',
  'Build a markdown parser', 'Add auth to a toy app', 'Build a CLI tool',
  'Create a data viz widget', 'Refactor legacy component', 'Build a chat UI',
  'Write a rate limiter', 'Build a form with validation', 'Ship a Chrome extension',
];

function briefFor(day: number) {
  const t = TITLES[(day - 1) % TITLES.length];
  return t;
}

// Day 5 is deliberately missed, and "today" is Day 12 — matches the
// screenshot route map (/day/12) and lets the dashboard demonstrate
// a broken-then-recovered streak instead of a spotless one.
export const CHALLENGE_DAYS: ChallengeDay[] = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  let status: ChallengeDay['status'] = 'upcoming';
  if (day < 12 && day !== 5) status = 'done';
  else if (day === 5) status = 'missed';
  else if (day === 12) status = 'today';
  else status = 'locked';

  return {
    day,
    title: briefFor(day),
    brief: `Today's build: ${briefFor(day)}. Keep it small enough to ship in one sitting.`,
    goal: 'Ship something real, push it to GitHub, and post your progress.',
    status,
  };
});

export const STUDENT_PROFILE: StudentProfile = {
  name: 'Ananya Rao',
  track: 'Full-Stack Web',
  currentStreak: 6,
  longestStreak: 6,
  startedDay: 1,
  todayIndex: 12,
  achievements: [
    { id: 'first-commit', label: 'First Commit', description: 'Submitted Day 1', unlocked: true },
    { id: 'one-week', label: '7-Day Streak', description: 'Build for 7 days straight', unlocked: false },
    { id: 'comeback', label: 'Comeback', description: 'Kept going after a missed day', unlocked: true },
    { id: 'halfway', label: 'Halfway There', description: 'Reach Day 30', unlocked: false },
  ],
};

export const SUBMISSIONS: Submission[] = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11].map((day) => ({
  day,
  projectTitle: briefFor(day),
  githubUrl: `https://github.com/ananya-rao/abtalks-day-${day}`,
  description: 'Shipped within the day, kept scope small.',
  techStack: ['React', 'TypeScript'],
  linkedinUrl: day % 2 === 0 ? `https://linkedin.com/posts/ananya-rao-day-${day}` : undefined,
  submittedAt: new Date(2026, 6, day).toISOString(),
}));

// Empty-profile fixture — a student who has just landed and not started
// Day 1 yet. Used by the dashboard's empty-state path.
export const NEW_STUDENT_PROFILE: StudentProfile = {
  name: 'New Builder',
  track: 'Unassigned',
  currentStreak: 0,
  longestStreak: 0,
  startedDay: 0,
  todayIndex: 1,
  achievements: STUDENT_PROFILE.achievements.map((a) => ({ ...a, unlocked: false })),
};