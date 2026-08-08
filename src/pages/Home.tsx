import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Flame, Users, Zap, Quote, Star } from 'lucide-react';
import { TRACKS } from '../data';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ABTalks — 60 Days of Code';
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[390px] md:max-w-6xl mx-auto min-h-screen flex flex-col shadow-2xl md:shadow-none bg-white">
        
        {/* Header */}
        <header className="px-5 md:px-8 pt-6 pb-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-transparent">
          <div 
            className="text-2xl md:text-3xl tracking-wider text-black"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            AB TALKS
          </div>
          <div className="text-[11px] md:text-xs font-bold px-3 py-1.5 bg-black text-white rounded-full tracking-wide uppercase">
            48hr Hackathon
          </div>
        </header>

        {/* Hero */}
        <section className="px-5 md:px-8 pt-6 md:pt-16 pb-8 md:pb-16 md:flex md:items-center md:gap-16">
          <div className="md:flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-700 mb-5">
              <Flame size={14} className="text-orange-500" />
              <span>150+ students building right now</span>
            </div>
            
            <h1 className="text-[2.75rem] md:text-7xl font-black leading-[1.05] tracking-tight mb-5">
              Build something every day for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">60 days</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-black/10 -z-0"></span>
              </span>
            </h1>
            
            <p className="text-gray-500 text-base md:text-xl leading-relaxed mb-8 max-w-lg">
              Pick a track. Build daily. Get visible to recruiters through proof of work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="group px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-200"
              >
                Start Your Streak
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => window.open('https://github.com', '_blank')}
                className="px-8 py-4 border-2 border-gray-200 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 cursor-pointer hover:border-black hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
              >
                <ExternalLink size={20} />
                View on GitHub
              </button>
            </div>
          </div>

          {/* Desktop: Exact Preview Card */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="relative w-80 md:w-96">
              {/* Tilted shadow card behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2rem] rotate-6 opacity-50" />
              
              {/* Main white card */}
              <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-6 flex flex-col h-80">
                {/* Browser dots */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                {/* Gray placeholder lines */}
                <div className="space-y-3 flex-1">
                  <div className="h-3 bg-gray-100 rounded-full w-full" />
                  <div className="h-3 bg-gray-100 rounded-full w-2/3" />
                  <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                  <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                </div>

                {/* Streak badge */}
                <div className="flex items-center gap-2 text-sm font-bold bg-gray-50 px-4 py-2.5 rounded-xl w-fit">
                  <Flame size={16} className="text-orange-500" />
                  <span>12 day streak</span>
                  <Flame size={16} className="text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Rules */}
        <section className="px-5 md:px-8 py-8 md:py-14 bg-gray-50/80 border-y border-gray-100">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-6 md:mb-8">
            The Challenge
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-5 space-y-4 md:space-y-0">
            {[
              'Pick a track and stick to it for 60 days',
              'Build one project every single day',
              'Submit GitHub commit + LinkedIn post as proof',
              'Miss a day? Your streak resets to zero',
              'Top builders get recruiter visibility',
              'Join 150+ students across India'
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3.5 group">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-black transition-colors duration-200">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="px-5 md:px-8 py-8 md:py-14">
          <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Pick Your Track</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TRACKS.map(track => (
              <div 
                key={track.id}
                onClick={() => navigate('/dashboard')}
                className="p-5 md:p-6 bg-white border border-gray-100 rounded-2xl cursor-pointer hover:border-black hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-200"
              >
                <div className="text-3xl md:text-4xl mb-3">{track.emoji}</div>
                <div className="font-bold text-sm md:text-base">{track.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="px-5 md:px-8 py-8 md:py-14 bg-gray-50/50 border-y border-gray-100">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-2">Trust & Proof</h2>
            <p className="text-2xl md:text-3xl font-black">Built for students. Loved by builders.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              { num: '60', label: 'Days of structured learning' },
              { num: '2,400+', label: 'Projects shipped to GitHub' },
              { num: '150+', label: 'Active student builders' },
              { num: '4', label: 'Specialized tracks' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl md:text-3xl font-black mb-1">{stat.num}</div>
                <div className="text-xs md:text-sm text-gray-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
            {[
              { 
                quote: "I got 3 interview calls after recruiters saw my 60-day streak on LinkedIn.", 
                name: "Priya R.", 
                college: "IIT Madras",
                stars: 5 
              },
              { 
                quote: "The daily accountability changed how I code. No more tutorial hell.", 
                name: "Arjun K.", 
                college: "NIT Trichy",
                stars: 5 
              },
              { 
                quote: "From zero projects to a full GitHub portfolio. ABTalks forced me to ship.", 
                name: "Sneha M.", 
                college: "BITS Pilani",
                stars: 5 
              },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 relative">
                <Quote size={20} className="text-gray-200 mb-3" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 font-medium">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm font-bold">{t.name}</div>
                <div className="text-xs text-gray-400">{t.college}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">
              Students from top colleges trust ABTalks
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-gray-400">
              <span>IIT Bombay</span>
              <span className="text-gray-200">|</span>
              <span>IIT Madras</span>
              <span className="text-gray-200">|</span>
              <span>BITS Pilani</span>
              <span className="text-gray-200">|</span>
              <span>NIT Trichy</span>
              <span className="text-gray-200">|</span>
              <span>IIIT Hyderabad</span>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-5 md:px-8 py-8 md:py-14 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <Users size={20} />
              <span className="font-bold md:text-lg">Built for Indian College Students</span>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-lg mx-auto">
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-black">60</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Days</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-black">4</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Tracks</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-black">2.4k+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Projects</div>
              </div>
            </div>
            <div className="mt-8 md:mt-10 pt-6 border-t border-white/10 text-xs md:text-sm text-gray-500 text-center flex items-center justify-center gap-2">
              <Zap size={14} className="text-yellow-500" />
              Most active between 10 PM — 2 AM
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-5 md:px-8 py-10 text-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-sm md:text-base font-semibold text-gray-400 hover:text-black cursor-pointer transition-colors flex items-center justify-center gap-1.5 mx-auto"
          >
            View Demo Dashboard
            <ExternalLink size={14} />
          </button>
        </footer>

      </div>
    </div>
  );
}