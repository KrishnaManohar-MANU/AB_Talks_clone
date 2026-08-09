import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Copy, Check, ExternalLink, Lightbulb, GitBranch, FileText, Sparkles } from 'lucide-react';
import { DAY_12, USER } from '../data';

function LinkedInGenerator({ projectTitle, projectDesc }: { projectTitle: string; projectDesc: string }) {
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!projectTitle) return;
    const post = `Day 12 of #60DaysOfCode with ABTalks 🚀

Today I built: ${projectTitle}

${projectDesc.slice(0, 120)}${projectDesc.length > 120 ? '...' : ''}

Key learnings:
• Mobile-first responsive design
• CSS Grid & Flexbox mastery  
• Shipping fast under deadlines

Pushed 3 commits and deployed to production. Consistency > perfection.

What's your biggest learning this week? 👇

#WebDev #StudentBuilder #ProofOfWork #ABTalks`;
    setGenerated(post);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-5 md:p-6 bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-2xl">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={18} className="text-violet-600" />
        <span className="text-sm font-bold text-gray-900">LinkedIn Post Helper</span>
        <span className="text-[10px] px-2.5 py-1 bg-violet-100 text-violet-700 rounded-full font-bold">NEW</span>
      </div>
      <p className="text-xs md:text-sm text-gray-500 mb-4 leading-relaxed">
        Stuck writing your daily LinkedIn post at midnight? We'll draft one from your project details.
      </p>
      
      {!generated ? (
        <button
          onClick={generate}
          disabled={!projectTitle}
          className="w-full py-3 bg-violet-600 text-white rounded-xl text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20 active:scale-[0.98] transition-all duration-200"
        >
          Generate LinkedIn Post
        </button>
      ) : (
        <div className="space-y-3">
          <textarea
            readOnly
            value={generated}
            className="w-full h-44 p-4 bg-white border border-gray-200 rounded-xl text-xs md:text-sm leading-relaxed resize-none focus:outline-none focus:border-violet-300 transition-colors"
          />
          <button
            onClick={copy}
            className="w-full py-3 bg-black text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
          >
            {copied ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy to Clipboard</>}
          </button>
        </div>
      )}
    </div>
  );
}

export default function DayPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState('');

  useEffect(() => {
    document.title = 'Day 12 | ABTalks';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-[390px] md:max-w-5xl mx-auto min-h-screen flex flex-col bg-white md:bg-gray-50 pb-8">
        
        {/* Header */}
        <header className="px-5 md:px-8 pt-5 pb-3 flex items-center gap-3 sticky top-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200"
            aria-label="Go back"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <div>
            <div className="text-xs text-gray-400 font-semibold">Day {DAY_12.day} of 60</div>
            <div className="font-bold text-lg leading-tight">Today's Challenge</div>
          </div>
        </header>

        {!submitted ? (
          <div className="px-5 md:px-8 py-6 md:py-10 md:grid md:grid-cols-2 md:gap-10">
            
            {/* Task Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 h-fit shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[11px] font-black px-3 py-1.5 bg-black text-white rounded-full tracking-wider uppercase">
                  {DAY_12.track}
                </span>
                <span className="text-xs text-gray-400 font-medium">~3 hours</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black mb-3 leading-tight">{DAY_12.title}</h1>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
                {DAY_12.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {DAY_12.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-200 shrink-0 mt-0.5 group-hover:border-black transition-colors duration-200" />
                    <span className="text-sm md:text-base text-gray-600 group-hover:text-black transition-colors duration-200">{req}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 md:p-5 bg-amber-50/70 border border-amber-100 rounded-2xl">
                <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-amber-800 leading-relaxed font-medium">{DAY_12.tips}</p>
              </div>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-5 mt-6 md:mt-0">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Project Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g., SaaS Landing Page"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">GitHub Repository</label>
                <div className="relative group">
                  <GitBranch size={16} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-black transition-colors duration-200" />
                  <input
                    type="url"
                    required
                    value={githubUrl}
                    onChange={e => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/repo"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Live Deployment URL</label>
                <div className="relative group">
                  <ExternalLink size={16} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-black transition-colors duration-200" />
                  <input
                    type="url"
                    required
                    value={liveUrl}
                    onChange={e => setLiveUrl(e.target.value)}
                    placeholder="https://your-project.vercel.app"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">What did you build?</label>
                <textarea
                  required
                  rows={3}
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="I built a responsive landing page using CSS Grid..."
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 transition-all duration-200 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">LinkedIn Post URL</label>
                <div className="relative group">
                  <FileText size={16} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-black transition-colors duration-200" />
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={e => setLinkedinUrl(e.target.value)}
                    placeholder="Paste your LinkedIn post link"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 transition-all duration-200"
                  />
                </div>
              </div>

              <LinkedInGenerator projectTitle={title} projectDesc={desc} />

              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 mt-2"
              >
                Submit Day {DAY_12.day}
              </button>
              
              <p className="text-center text-xs text-gray-400 font-medium">
                Deadline: {DAY_12.deadline} IST
              </p>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="px-5 md:px-8 py-12 md:py-20 text-center max-w-md mx-auto">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20 animate-bounce">
              <CheckCircle size={44} className="text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Day {DAY_12.day} Submitted!</h2>
            <p className="text-gray-500 md:text-lg mb-10 leading-relaxed">
              Great work, {USER.name.split(' ')[0]}! Your streak is now{' '}
              <span className="font-black text-black">{USER.streak + 1} days</span>.
            </p>
            
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-4 bg-black text-white rounded-2xl font-bold cursor-pointer hover:bg-gray-900 hover:shadow-xl active:scale-[0.98] transition-all duration-200"
              >
                Back to Dashboard
              </button>
              <button 
                onClick={() => window.open(linkedinUrl || '#', '_blank')}
                className="w-full py-4 border-2 border-gray-200 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer hover:border-black hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
              >
                <ExternalLink size={16} />
                View LinkedIn Post
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}