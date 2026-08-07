import { useNavigate } from 'react-router-dom';
import { Code2, Trophy, Zap, GitHub, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-purple-400">ABTalks</div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all"
        >
          Start Building
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-8">
          <Zap size={16} />
          <span>48-Hour Hackathon Edition</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Build something every day for{' '}
          <span className="text-purple-400">60 days.</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          A focused coding challenge for students who want to build consistency, 
          create proof of work, and become visible to recruiters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            View Student Dashboard
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => window.open('https://github.com', '_blank')}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
          >
            <GitHub size={20} />
            View on GitHub
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl">
            <Code2 className="mx-auto mb-3 text-purple-400" size={32} />
            <div className="text-3xl font-bold mb-1">2,400+</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl">
            <Trophy className="mx-auto mb-3 text-purple-400" size={32} />
            <div className="text-3xl font-bold mb-1">150+</div>
            <div className="text-gray-400">Active Builders</div>
          </div>
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl">
            <Zap className="mx-auto mb-3 text-purple-400" size={32} />
            <div className="text-3xl font-bold mb-1">60</div>
            <div className="text-gray-400">Days of Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}