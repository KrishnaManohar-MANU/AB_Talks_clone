import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Flame, TrendingUp, Calendar, ChevronRight, Award, Clock, ArrowLeft, Home, User } from 'lucide-react';
import { USER, SUBMISSIONS, ACHIEVEMENTS, getStreakMessage } from '../data';

export default function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const completedDays = SUBMISSIONS.filter(s => s.status === 'completed').length;
  const progressPercent = (completedDays / 60) * 100;
  const todaySub = SUBMISSIONS.find(s => s.day === 12);

  useEffect(() => {
    document.title = 'Dashboard | ABTalks';
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-[390px] md:max-w-5xl mx-auto min-h-screen flex flex-col bg-white md:bg-gray-50 md:shadow-none">
        
        {/* Navbar */}
        <nav className="px-5 md:px-8 pt-5 pb-3 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200"
              aria-label="Go back"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none">Dashboard</h1>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">{USER.college}</p>
            </div>
          </div>
          <div 
            className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200 cursor-default"
            title={USER.name}
          >
            {USER.name.split(' ').map(n => n[0]).join('')}
          </div>
        </nav>

        <div className="md:grid md:grid-cols-3 md:gap-6 md:px-8 md:pt-6 pb-24 md:pb-10">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-5">
            
            {/* Streak Hero Card */}
            <section className="px-5 md:px-0 pt-5 md:pt-0">
              <div className="bg-black text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Flame size={18} className="text-orange-400" />
                    <span className="text-sm font-medium text-gray-400">Current Streak</span>
                  </div>
                  <div className="text-6xl font-black tracking-tighter mb-2">{USER.streak}</div>
                  <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
                    {getStreakMessage(USER.streak, todaySub?.status === 'pending' && new Date().getHours() > 22)}
                  </p>
                  
                  <div className="flex gap-2">
                    {SUBMISSIONS.slice(-7).map((s, i) => (
                      <div 
                        key={i}
                        className={`flex-1 h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300
                          ${s.status === 'completed' 
                            ? 'bg-green-500 text-black shadow-lg shadow-green-500/25' 
                            : 'bg-white/10 text-gray-500'}
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
            <section className="px-5 md:px-0">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm font-bold text-gray-900">Challenge Progress</span>
                <span className="text-sm font-medium text-gray-400">{completedDays}/60 days</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </section>

            {/* Today's Task - Primary CTA */}
            <section className="px-5 md:px-0">
              <button
                type="button"
                onClick={() => navigate('/day/12')}
                className="group w-full text-left bg-white border-2 border-black rounded-3xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} strokeWidth={2.5} />
                      <span className="font-bold text-lg">Day 12</span>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full">
                      Due 11:59 PM
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">Build a Responsive Landing Page</h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-2">
                    Create a fully responsive landing page for a fictional SaaS product. Mobile-first design required.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Clock size={14} />
                      <span>~3 hours estimated</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all duration-300">
                      Start Now <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </button>
            </section>

            {/* Recent Submissions */}
            <section className="px-5 md:px-0">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Recent Submissions</h3>
              <div className="space-y-2.5 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
                {SUBMISSIONS.slice().reverse().slice(0, 6).map(s => {
                  const itemContent = (
                    <>
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200
                          ${s.status === 'completed' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}
                        `}>
                          {s.day}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{s.title || 'Pending...'}</div>
                          <div className="text-xs text-gray-400 font-medium">{s.date}</div>
                        </div>
                      </div>
                      {s.status === 'completed' && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </>
                  );

                  return s.day === 12 ? (
                    <button
                      key={s.day}
                      type="button"
                      onClick={() => navigate('/day/12')}
                      className="w-full flex items-center justify-between p-4 rounded-2xl border border-black bg-white cursor-pointer hover:shadow-md transition-all duration-200 text-left"
                    >
                      {itemContent}
                    </button>
                  ) : (
                    <div
                      key={s.day}
                      className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white transition-all duration-200"
                    >
                      {itemContent}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="px-5 md:px-0 pt-2 md:pt-0 space-y-5">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <TrendingUp size={20} className="text-gray-300 mb-3" strokeWidth={2} />
                <div className="text-3xl font-black tracking-tight">{USER.rank}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium">Rank / {USER.totalBuilders}</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <Award size={20} className="text-gray-300 mb-3" strokeWidth={2} />
                <div className="text-3xl font-black tracking-tight">{ACHIEVEMENTS.filter(a => a.unlocked).length}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium">Achievements</div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Achievements</h3>
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
                {ACHIEVEMENTS.map(a => (
                  <div 
                    key={a.id}
                    className={`shrink-0 md:w-full w-32 md:flex md:items-center md:gap-3 p-4 rounded-2xl border transition-all duration-300 text-center md:text-left
                      ${a.unlocked 
                        ? 'border-gray-200 bg-white hover:shadow-md' 
                        : 'border-gray-100 bg-gray-50 opacity-50 grayscale'}
                    `}
                  >
                    <div className="text-2xl md:text-2xl mb-1 md:mb-0">{a.icon}</div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">{a.name}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 font-medium">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-around items-center max-w-[390px] mx-auto">
          <button 
            onClick={() => navigate('/dashboard')}
            className={`flex flex-col items-center gap-1 transition-opacity duration-200 ${isActive('/dashboard') ? 'opacity-100' : 'opacity-40'}`}
          >
            <Home size={20} strokeWidth={isActive('/dashboard') ? 2.5 : 2} />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button 
            onClick={() => navigate('/day/12')}
            className={`flex flex-col items-center gap-1 transition-opacity duration-200 ${isActive('/day/12') ? 'opacity-100' : 'opacity-40'}`}
          >
            <Calendar size={20} strokeWidth={isActive('/day/12') ? 2.5 : 2} />
            <span className="text-[10px] font-bold">Day 12</span>
          </button>
          <button className="flex flex-col items-center gap-1 opacity-40">
            <User size={20} />
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>

      </div>
    </div>
  );
}