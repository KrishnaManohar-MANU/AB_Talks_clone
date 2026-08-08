import { useNavigate } from 'react-router-dom';
import type { ChallengeDay } from '../types';

interface StreakGridProps {
  days: ChallengeDay[];
  interactive?: boolean;
}

const STATUS_CLASSES: Record<ChallengeDay['status'], string> = {
  done: 'bg-text border-text',
  missed: 'bg-white border-text border-dashed',
  today: 'bg-white border-text border-2',
  locked: 'bg-surface-hi border-surface-hi',
  upcoming: 'bg-surface-hi border-surface-hi',
};

export default function StreakGrid({ days, interactive = false }: StreakGridProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-10 gap-1.5" role={interactive ? 'list' : undefined} aria-label={interactive ? '60-day challenge grid' : undefined}>
      {days.map((d) => {
        const clickable = interactive && (d.status === 'done' || d.status === 'today' || d.status === 'missed');
        const Tag = clickable ? 'button' : 'div';
        return (
          <Tag
            key={d.day}
            title={`Day ${d.day} — ${d.status}`}
            aria-label={`Day ${d.day}, ${d.status}`}
            onClick={clickable ? () => navigate(`/day/${d.day}`) : undefined}
            className={`h-[20px] w-[20px] rounded-[4px] border ${STATUS_CLASSES[d.status]} ${clickable ? 'cursor-pointer active:opacity-60' : ''}`}
          />
        );
      })}
    </div>
  );
}