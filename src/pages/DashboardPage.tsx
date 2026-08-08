import { useNavigate } from 'react-router-dom';
import { Flame, TrendingUp, Calendar, ChevronRight, Award, Clock, ArrowLeft } from 'lucide-react';
import { USER, SUBMISSIONS, ACHIEVEMENTS, getStreakMessage } from '../data';
import { useEffect } from 'react';
export default function DashboardPage() {
  const navigate = useNavigate();
  const completedDays = SUBMISSIONS.filter(s => s.status === 'completed').length;
  const progressPercent = (completedDays / 60) * 100;
  const todaySub = SUBMISSIONS.find(s => s.day === 12);
  
  useEffect(() => {
    document.title = 'Dashboard | ABTalks';
  }, []);

  
  

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[390px] md:max-w-5xl mx-auto min-h-screen flex flex-col pb-24 md:pb-8 bg-white shadow-2xl md:shadow-none">
        
        {/* Header */}
        <header className="px-5 md:px-8 pt-6 pb-3 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-200"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-black">Dashboard</h1>
              <p className="text-sm text-gray-400">{USER.college} • {USER.track}</p>
            </div>
          </div>
          <div className="w-10 h-10 md:w-11 md:h-11 bg-black text-white rounded-full flex items-center justify-center font-black text-sm cursor-pointer hover:scale-105 transition-transform duration-200">
            {USER.name.split(' ').map(n => n[0]).join('')}
          </div>
        </header>

        <div className="md:grid md:grid-cols-3 md:gap-6 md:px-8 md:pt-4">
          {/* Left column */}
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            
            {/* Streak Card */}
            <section className="px-5 md:px-0 py-4">
              <div className="bg-black text-white rounded-[1.75rem] p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame size={20} className="text-orange-400" />
                    <span className="text-sm font-semibold text-gray-300">Current Streak</span>
                  </div>
                  <div className="text-6xl md:text-7xl font-black mb-2 tracking-tighter">{USER.streak}</div>
                  <div className="text-sm text-gray-400 mb-5 md:mb-7 max-w-sm leading-relaxed">
                    {getStreakMessage(USER.streak, todaySub?.status === 'pending' && new Date().getHours() > 22)}
                  </div>
                  
                  <div className="flex gap-1.5 md:gap-2">
                    {SUBMISSIONS.slice(-7).map((s, i) => (
                      <div 
                        key={i}
                        className={`flex-1 h-9 md:h-11 rounded-lg flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-200
                          ${s.status === 'completed' ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'bg-white/10 text-gray-500'}
                        `}
                      >
                        {s.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Progress */}
            <section className="px-5 md:px-0 py-2">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm md:text-base font-bold">Challenge Progress</span>
                <span className="text-sm md:text-base text-gray-400 font-medium">{completedDays}/60 days</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </section>

            {/* Today's Task Card */}
            <section className="px-5 md:px-0 py-2">
              <div 
                onClick={() => navigate('/day/12')}
                className="border-2 border-black rounded-[1.5rem] p-5 md:p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 bg-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="font-bold md:text-lg">Day 12</span>
                    </div>
                    <span className="text-[11px] md:text-xs font-bold px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full">
                      Due 11:59 PM
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1.5 group-hover:translate-x-1 transition-transform duration-200">Build a Responsive Landing Page</h3>
                  <p className="text-sm md:text-base text-gray-500 mb-5 line-clamp-2 leading-relaxed">
                    Create a fully responsive landing page for a fictional SaaS product. Mobile-first design required.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                      <Clock size={14} />
                      <span>~3 hours estimated</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm md:text-base font-bold group-hover:gap-2 transition-all duration-200">
                      Start Now <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Submissions */}
            <section className="px-5 md:px-0 py-2">
              <h3 className="font-bold md:text-lg mb-3">Recent Submissions</h3>
              <div className="space-y-2 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
                {SUBMISSIONS.slice().reverse().slice(0, 6).map(s => (
                  <div 
                    key={s.day}
                    onClick={() => s.day === 12 ? navigate('/day/12') : null}
                    className={`flex items-center justify-between p-3.5 md:p-4 rounded-xl border transition-all duration-200
                      ${s.day === 12 ? 'border-black cursor-pointer hover:shadow-md hover:bg-gray-50/50' : 'border-gray-100'}
                      ${s.status === 'completed' ? 'bg-white' : 'bg-gray-50/50'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-200
                        ${s.status === 'completed' ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}
                      `}>
                        {s.day}
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-semibold">{s.title || 'Pending...'}</div>
                        <div className="text-xs text-gray-400">{s.date}</div>
                      </div>
                    </div>
                    {s.status === 'completed' && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm shadow-green-500/20">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="px-5 md:px-0 py-4 md:py-0 space-y-4 md:space-y-6">
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
              <div className="border border-gray-100 rounded-2xl p-5 md:p-6 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <TrendingUp size={22} className="text-gray-300 mb-3" />
                <div className="text-3xl md:text-4xl font-black">{USER.rank}</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Your Rank / {USER.totalBuilders}</div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-5 md:p-6 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <Award size={22} className="text-gray-300 mb-3" />
                <div className="text-3xl md:text-4xl font-black">{ACHIEVEMENTS.filter(a => a.unlocked).length}</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Achievements</div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-bold md:text-lg mb-3">Achievements</h3>
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
                {ACHIEVEMENTS.map(a => (
                  <div 
                    key={a.id}
                    className={`shrink-0 md:w-full w-32 md:flex md:items-center md:gap-4 p-4 md:p-4 rounded-2xl border transition-all duration-200
                      ${a.unlocked 
                        ? 'border-black bg-white shadow-sm' 
                        : 'border-gray-100 bg-gray-50/50 opacity-50 grayscale'}
                    `}
                  >
                    <div className="text-3xl md:text-3xl mb-1 md:mb-0">{a.icon}</div>
                    <div>
                      <div className="text-xs md:text-sm font-bold">{a.name}</div>
                      <div className="text-[10px] md:text-xs text-gray-400 mt-0.5">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav - Mobile only */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-around items-center max-w-[390px] mx-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <div className="w-6 h-6 bg-black rounded-lg shadow-sm" />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button 
            onClick={() => navigate('/day/12')}
            className="flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          >
            <div className="w-6 h-6 border-2 border-gray-400 rounded-lg" />
            <span className="text-[10px] font-bold">Day 12</span>
          </button>
          <button className="flex flex-col items-center gap-1 cursor-pointer opacity-40">
            <div className="w-6 h-6 border-2 border-gray-400 rounded-lg" />
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>

      </div>
    </div>
  );
}