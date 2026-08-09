import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Flame, Users, Zap, Quote, Star, Menu, X } from 'lucide-react';
import { TRACKS } from '../data';

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'ABTalks — 60 Days of Code';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.animate-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Day 12', path: '/day/12' },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[390px] md:max-w-6xl mx-auto min-h-screen flex flex-col shadow-2xl md:shadow-none bg-white">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100/80">
          <div className="px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
            <div 
              className="text-xl md:text-2xl tracking-wider text-black select-none"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              AB TALKS
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-black rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/dashboard')}
                className="ml-3 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-gray-800 btn-press transition-all duration-200"
              >
                Start Building
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden px-5 pb-4 border-t border-gray-50 bg-white/95 backdrop-blur-xl animate-reveal visible">
              {navLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => { navigate(link.path); setMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Hero */}
        <section className="px-5 md:px-8 pt-8 md:pt-20 pb-10 md:pb-24 md:flex md:items-center md:gap-16">
          <div className="md:flex-1">
            <div className="animate-reveal inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-xs font-bold text-orange-700 mb-5">
              <Flame size={13} className="text-orange-500" />
              <span>150+ students building right now</span>
            </div>
            
            <h1 className="animate-reveal delay-100 text-[2.6rem] md:text-[4.5rem] font-black leading-[1.08] tracking-tight mb-5">
              Build something every day for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">60 days</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-5 bg-black/8 -z-0 rounded-sm"></span>
              </span>
            </h1>
            
            <p className="animate-reveal delay-200 text-gray-500 text-base md:text-xl leading-relaxed mb-8 max-w-md md:max-w-lg">
              Pick a track. Build daily. Get visible to recruiters through proof of work.
            </p>

            <div className="animate-reveal delay-300 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="group px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 hover:shadow-xl hover:shadow-black/10 btn-press transition-all duration-300"
              >
                Start Your Streak
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => window.open('https://github.com', '_blank')}
                className="px-8 py-4 border-2 border-gray-200 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 cursor-pointer hover:border-black hover:bg-gray-50 btn-press transition-all duration-300"
              >
                <ExternalLink size={20} />
                View on GitHub
              </button>
            </div>
          </div>

          {/* Desktop Preview Card */}
          <div className="hidden md:flex md:flex-1 md:justify-center animate-reveal delay-200">
            <div className="relative w-80 md:w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2rem] rotate-6 opacity-50" />
              <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-6 flex flex-col h-80">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="h-3 bg-gray-100 rounded-full w-full" />
                  <div className="h-3 bg-gray-100 rounded-full w-2/3" />
                  <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                  <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                </div>
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
        <section className="px-5 md:px-8 py-10 md:py-16 bg-gray-50/80 border-y border-gray-100">
          <h2 className="animate-reveal text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 md:mb-10">
            The Challenge
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-5 space-y-4 md:space-y-0">
            {[
              'Pick a track and stick to it for 60 days',
              'Build one project every single day',
              'Submit GitHub commit + LinkedIn post as proof',
              'Miss a day? Your streak resets to zero',
              'Top builders get recruiter visibility',
              'Join 150+ students across India'
            ].map((rule, i) => (
              <div key={i} className={`animate-reveal delay-${(i % 3) * 100} flex items-start gap-3.5 group`}>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-black transition-colors duration-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="px-5 md:px-8 py-10 md:py-16">
          <h2 className="animate-reveal text-lg md:text-2xl font-bold mb-5 md:mb-8">Pick Your Track</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {TRACKS.map((track, i) => (
              <div 
                key={track.id}
                onClick={() => navigate('/dashboard')}
                className={`animate-reveal delay-${(i % 4) * 100} p-5 md:p-6 bg-white border border-gray-100 rounded-2xl cursor-pointer card-lift active:scale-[0.98] transition-all duration-300`}
              >
                <div className="text-3xl md:text-4xl mb-3">{track.emoji}</div>
                <div className="font-bold text-sm md:text-base">{track.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-5 md:px-8 py-10 md:py-16 bg-gray-50/50 border-y border-gray-100">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="animate-reveal text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Trust & Proof</h2>
            <p className="animate-reveal delay-100 text-2xl md:text-4xl font-black leading-tight">Built for students.<br className="md:hidden" /> Loved by builders.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-12">
            {[
              { num: '60', label: 'Days of structured learning' },
              { num: '2,400+', label: 'Projects shipped to GitHub' },
              { num: '150+', label: 'Active student builders' },
              { num: '4', label: 'Specialized tracks' },
            ].map((stat, i) => (
              <div key={i} className={`animate-reveal delay-${i * 100} bg-white border border-gray-100 rounded-2xl p-5 md:p-6 text-center card-lift`}>
                <div className="text-2xl md:text-3xl font-black mb-1">{stat.num}</div>
                <div className="text-xs md:text-sm text-gray-500 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
            {[
              { quote: "I got 3 interview calls after recruiters saw my 60-day streak on LinkedIn.", name: "Priya R.", college: "IIT Madras", stars: 5 },
              { quote: "The daily accountability changed how I code. No more tutorial hell.", name: "Arjun K.", college: "NIT Trichy", stars: 5 },
              { quote: "From zero projects to a full GitHub portfolio. ABTalks forced me to ship.", name: "Sneha M.", college: "BITS Pilani", stars: 5 },
            ].map((t, i) => (
              <div key={i} className={`animate-reveal delay-${i * 150} bg-white border border-gray-100 rounded-2xl p-5 md:p-6 card-lift cursor-default`}>
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

          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
              Students from top colleges trust ABTalks
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-gray-400">
              <span>IIT Bombay</span>
              <span className="text-gray-200 hidden md:inline">|</span>
              <span>IIT Madras</span>
              <span className="text-gray-200 hidden md:inline">|</span>
              <span>BITS Pilani</span>
              <span className="text-gray-200 hidden md:inline">|</span>
              <span>NIT Trichy</span>
              <span className="text-gray-200 hidden md:inline">|</span>
              <span>IIIT Hyderabad</span>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-5 md:px-8 py-10 md:py-16 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative">
            <div className="animate-reveal flex items-center gap-2 mb-6 md:mb-8">
              <Users size={20} />
              <span className="font-bold md:text-lg">Built for Indian College Students</span>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-lg mx-auto">
              {[
                { num: '60', label: 'Days' },
                { num: '4', label: 'Tracks' },
                { num: '2.4k+', label: 'Projects' },
              ].map((s, i) => (
                <div key={i} className={`animate-reveal delay-${i * 100} p-4 rounded-2xl bg-white/5 backdrop-blur-sm`}>
                  <div className="text-3xl md:text-5xl font-black">{s.num}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
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