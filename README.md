# ABTalks — 60-Day Coding Challenge

A mobile-first frontend prototype for a consistency-driven coding challenge experience built for Indian college students.

## Overview

ABTalks is designed to help students build in public by shipping something every day for 60 days. 
This project focuses on the student-facing journey: understanding the challenge, tracking progress, and submitting daily proof of work.

The core flow encourages students to:
- pick a track,
- complete a daily task,
- submit proof via GitHub and LinkedIn,
- maintain a visible learning streak over time.

## Features

### 1) Landing Page (`/`)
- Introduces the 60-day challenge format
- Explains daily build + public proof workflow
- Highlights available learning tracks
- Includes responsive navigation (desktop + mobile menu)
- Uses scroll-reveal style interactions for sections

### 2) Student Dashboard (`/dashboard`)
- Displays current streak and streak message
- Shows challenge progress (`completed days / 60` + progress bar)
- Highlights today's task (Day 12) with a primary CTA
- Shows recent submissions with status states (`completed`, `pending`)
- Displays rank/standing and achievement cards
- Includes mobile bottom navigation

### 3) Challenge Day Screen (`/day/12`)
- Presents the day-specific brief (title, requirements, tips, deadline)
- Includes a submission form for:
  - Project title
  - GitHub repository URL
  - Live deployment URL
  - Build description
  - LinkedIn post URL (optional)
- Includes a LinkedIn post helper that generates and copies draft text
- Provides a post-submit success state and quick navigation back to dashboard

### 4) Responsive, Mobile-First UI
- Layouts prioritize small screens (`~390px`) and scale to desktop
- Sticky headers, touch-friendly controls, and compact information blocks
- Clear visual hierarchy for high-frequency student actions

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/dashboard` | Student dashboard |
| `/day/12` | Challenge day experience |

### Route Map

```txt
/
/dashboard
/day/12
```

## Design Approach

This implementation follows a practical student-first UX approach:
- **Mobile-first layouts** for late-night, phone-heavy usage
- **Simple navigation** between landing, dashboard, and challenge day
- **Progress visibility** through streaks, status blocks, and completion indicators
- **Action-oriented screens** that keep “what to do next” obvious
- **Consistent visual language** with clear cards, badges, and CTA hierarchy

## Edge Cases Represented in UI

The current frontend includes UI states for:
- **Pending daily submission** (Day 12 shown as incomplete)
- **Mixed progress states** (`completed` and `pending` submission entries)
- **Streak messaging variations** via `getStreakMessage(...)` logic (including zero-streak and missed-day messaging paths)
- **Optional LinkedIn URL behavior** in success actions (button disabled when empty)

## Tech Stack

Based on the current codebase (`package.json` + source):

| Category | Technologies |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | `react-router-dom` |
| Styling | Tailwind CSS, custom CSS |
| Animation / Motion | Framer Motion (dependency installed) |
| Icons | `lucide-react` |
| Linting | ESLint + TypeScript ESLint |

## Project Structure

```txt
AB_Talks_clone/
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── DashboardPage.tsx
│   │   └── DayPage.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── package.json
└── README.md
```

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/KrishnaManohar-MANU/AB_Talks_clone.git
cd AB_Talks_clone
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the development server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Demo

Live deployment: **[abtalksclone.netlify.app](https://abtalksclone.netlify.app/)**

## Screens

This repo currently includes three core student experiences:
1. **Landing Page** — challenge introduction, tracks, and motivation
2. **Student Dashboard** — streak, progress, submissions, and achievements
3. **Challenge Day** — day brief + proof-of-work submission flow

> Note: No screenshot image files are currently referenced in this repository README.

## Scope

This project is focused on the **student-facing frontend experience**.

Current implementation uses local/mock data (`src/data.ts`) to model:
- user profile,
- daily challenge content,
- submissions,
- achievements,
- streak messaging.

A production authentication system, backend APIs, and persistent database are **not** part of the current implementation.

## Future Improvements

Potential next steps:
- Real authentication and student accounts
- Persistent progress storage (backend + database)
- Actual challenge submission persistence and review workflow
- GitHub API integration for proof verification
- LinkedIn sharing workflow improvements
- Notifications/reminders for daily submissions
- Leaderboards and cohort-level insights
- Personalized recommendations based on streak/progress

## Contributing

Contributions are welcome.

If you want to improve UX, data flow, or challenge interactions:
1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes
