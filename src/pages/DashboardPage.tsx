import { useNavigate } from 'react-router-dom';
import { Flame, TrendingUp, Code2, Plus } from 'lucide-react';
import { useChallenge } from '../store/ChallengeContext';
import { useMemo } from 'react';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { currentDay, streak, completionRate, submissions } = useChallenge();
  const completedDays = useMemo(() => new Set(submissions.map(s => s.day)), [submissions]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div 
          className="text-2xl font-bold text-purple-400 cursor-pointer"
          onClick={() => navigate('/')}
        >
          ABTalks
        </div>
        <button 
          onClick={() => navigate(`/day/${currentDay}`)}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Submit Day {currentDay}
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
        <p className="text-gray-400 mb-8">Track your 60-day building journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="text-orange-500" size={24} />
              <span className="text-gray-400">Current Streak</span>
            </div>
            <div className="text-3xl font-bold">{streak} days</div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-green-500" size={24} />
              <span className="text-gray-400">Completion</span>
            </div>
            <div className="text-3xl font-bold">{completionRate.toFixed(1)}%</div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="text-purple-500" size={24} />
              <span className="text-gray-400">Projects</span>
            </div>
            <div className="text-3xl font-bold">{submissions.length}</div>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">60-Day Challenge Grid</h3>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 60 }, (_, i) => i + 1).map(day => {
              const isCompleted = completedDays.has(day);
              const isNext = day === currentDay;
              
              return (
                <div
                  key={day}
                  onClick={() => {
                    if (isCompleted || isNext || day < currentDay) {
                      navigate(`/day/${day}`);
                    }
                  }}
                  className={`
                    aspect-square rounded-md cursor-pointer transition-all hover:scale-110
                    ${isCompleted 
                      ? 'bg-green-500' 
                      : isNext 
                        ? 'bg-purple-500 animate-pulse' 
                        : day < currentDay 
                          ? 'bg-gray-600' 
                          : 'bg-gray-700'
                    }
                  `}
                  title={`Day ${day}`}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-sm" /> Completed
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-sm" /> Next
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-700 rounded-sm" /> Locked
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}