export interface Submission {
  day: number;
  title: string;
  githubUrl: string;
  linkedinUrl?: string;
  status: 'completed' | 'missed' | 'pending';
  date: string;
}

export const TRACKS = [
  { id: 'web', name: 'Web Development', emoji: '🌐' },
  { id: 'mobile', name: 'Mobile Apps', emoji: '📱' },
  { id: 'ai', name: 'AI & ML', emoji: '🤖' },
  { id: 'devops', name: 'DevOps', emoji: '⚙️' },
];

export const DAY_12 = {
  day: 12,
  track: 'web',
  title: 'Build a Responsive Landing Page',
  description: 'Create a fully responsive landing page for a fictional SaaS product. This is your first "client-ready" project.',
  requirements: [
    'Mobile-first design (390px breakpoint)',
    'At least 3 sections: Hero, Features, Pricing',
    'Smooth scroll navigation + hamburger menu',
    'Deploy to Vercel / Netlify with a live URL',
    'Push 3+ commits to GitHub with clear messages'
  ],
  tips: 'Use CSS Grid for the pricing cards and Flexbox for the navbar. Test on your actual phone before submitting.',
  deadline: '11:59 PM IST'
};

export const USER = {
  name: 'Rahul Sharma',
  college: 'IIT Bombay',
  track: 'web',
  streak: 12,
  longestStreak: 12,
  rank: 34,
  totalBuilders: 150,
  joinDate: '28 Jul 2026'
};

export const SUBMISSIONS: Submission[] = [
  { day: 1, title: 'Dev Environment Setup', githubUrl: '#', status: 'completed', date: '28 Jul' },
  { day: 2, title: 'HTML Semantic Page', githubUrl: '#', status: 'completed', date: '29 Jul' },
  { day: 3, title: 'CSS Flexbox Layout', githubUrl: '#', status: 'completed', date: '30 Jul' },
  { day: 4, title: 'CSS Grid Dashboard', githubUrl: '#', status: 'completed', date: '31 Jul' },
  { day: 5, title: 'Responsive Navbar', githubUrl: '#', status: 'completed', date: '01 Aug' },
  { day: 6, title: 'Form Validation', githubUrl: '#', status: 'completed', date: '02 Aug' },
  { day: 7, title: 'Dark Mode Toggle', githubUrl: '#', status: 'completed', date: '03 Aug' },
  { day: 8, title: 'CSS Animations', githubUrl: '#', status: 'completed', date: '04 Aug' },
  { day: 9, title: 'API Fetching', githubUrl: '#', status: 'completed', date: '05 Aug' },
  { day: 10, title: 'Error Handling', githubUrl: '#', status: 'completed', date: '06 Aug' },
  { day: 11, title: 'Loading States', githubUrl: '#', status: 'completed', date: '07 Aug' },
  { day: 12, title: '', githubUrl: '', status: 'pending', date: '08 Aug' },
];

export const ACHIEVEMENTS = [
  { id: '1', name: 'Week Warrior', icon: '🔥', unlocked: true, desc: '7 day streak' },
  { id: '2', name: 'Night Owl', icon: '🦉', unlocked: true, desc: 'Submitted after 10 PM' },
  { id: '3', name: 'Fortnight', icon: '⚡', unlocked: false, desc: '14 day streak' },
  { id: '4', name: 'Top 10%', icon: '🏆', unlocked: false, desc: 'Reach top 15 ranks' },
];

export const getStreakMessage = (streak: number, missed: boolean) => {
  if (missed) return "Don't break the chain! Submit today's task to keep your streak alive.";
  if (streak === 0) return "Every expert was once a beginner. Day 1 starts now.";
  if (streak < 7) return `You're building momentum. ${7 - streak} more days to unlock Week Warrior!`;
  if (streak < 14) return `On fire! ${14 - streak} more days to unlock Fortnight.`;
  return "Unstoppable! You're in the top tier of builders.";
};