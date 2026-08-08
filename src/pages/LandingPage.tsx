import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, Flame, Users, Zap } from 'lucide-react';
import { TRACKS } from '../data';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[390px] md:max-w-6xl mx-auto min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="px-5 md:px-8 pt-6 pb-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-tight">ABTalks</div>
          <div className="text-xs md:text-sm font-medium px-3 py-1.5 bg-black text-white rounded-full">
            48hr Hackathon
          </div>
        </header>

        {/* Hero */}
        <section className="px-5 md:px-8 pt-4 md:pt-12 pb-6 md:pb-12 md:flex md:items-center md:gap-12">
          <div className="md:flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium mb-4">
              <Flame size={14} className="text-orange-500" />
              <span>150+ students building right now</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
              Build something every day for{' '}
              <span className="underline decoration-4 decoration-black underline-offset-4">60 days</span>
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
              Pick a track. Build daily. Get visible to recruiters through proof of work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-8 py-4 bg-black text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 active:scale-95 transition-all"
              >
                Start Your Streak
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => window.open('https://github.com', '_blank')}
                className="px-8 py-4 border-2 border-gray-200 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 cursor-pointer hover:border-black hover:bg-gray-50 active:scale-95 transition-all"
              >
                <ExternalLink size={20} />
                View on GitHub
              </button>
            </div>
          </div>

          {/* Desktop visual */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-black rounded-3xl rotate-3 opacity-10" />
              <div className="absolute inset-0 bg-gray-100 border-2 border-gray-200 rounded-3xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-3/4" />
                  <div className="h-3 bg-gray-300 rounded w-1/2" />
                  <div className="h-3 bg-gray-300 rounded w-5/6" />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Flame size={16} className="text-orange-500" />
                  <span>12 day streak</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Rules */}
        <section className="px-5 md:px-8 py-6 md:py-10 bg-gray-50 border-y border-gray-200">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 md:mb-6">
            The Challenge
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 space-y-3 md:space-y-0">
            {[
              'Pick a track and stick to it for 60 days',
              'Build one project every single day',
              'Submit GitHub commit + LinkedIn post as proof',
              'Miss a day? Your streak resets to zero',
              'Top builders get recruiter visibility',
              'Join 150+ students across India'
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-black mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="px-5 md:px-8 py-6 md:py-10">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Pick Your Track</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TRACKS.map(track => (
              <div 
                key={track.id}
                onClick={() => navigate('/dashboard')}
                className="p-4 md:p-6 border border-gray-200 rounded-2xl cursor-pointer hover:border-black hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all"
              >
                <div className="text-2xl md:text-3xl mb-2">{track.emoji}</div>
                <div className="font-semibold text-sm md:text-base">{track.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-5 md:px-8 py-6 md:py-10 bg-black text-white">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Users size={18} />
            <span className="font-semibold md:text-lg">Built for Indian College Students</span>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-lg mx-auto">
            <div>
              <div className="text-2xl md:text-4xl font-bold">60</div>
              <div className="text-xs md:text-sm text-gray-400">Days</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold">4</div>
              <div className="text-xs md:text-sm text-gray-400">Tracks</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold">2.4k+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 border-t border-gray-800 text-xs md:text-sm text-gray-400 text-center flex items-center justify-center gap-2">
            <Zap size={14} />
            Most active between 10 PM — 2 AM
          </div>
        </section>
        #this is making the deployment to crash 

        {/* Footer */}
        <footer className="px-5 md:px-8 py-8 text-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-sm md:text-base font-medium text-gray-500 hover:text-black cursor-pointer transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            View Demo Dashboard
            <ExternalLink size={14} />
          </button>
        </footer>

      </div>
    </div>
  );
}


