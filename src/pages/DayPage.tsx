import { useState } from 'react';
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
    <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-2xl">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-purple-600" />
        <span className="text-sm md:text-base font-bold">LinkedIn Post Helper</span>
        <span className="text-[10px] px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">NEW</span>
      </div>
      <p className="text-xs md:text-sm text-gray-500 mb-3">
        Stuck writing your daily LinkedIn post at midnight? We'll draft one from your project details.
      </p>
      
      {!generated ? (
        <button
          onClick={generate}
          disabled={!projectTitle}
          className="w-full py-3 bg-purple-600 text-white rounded-xl text-sm md:text-base font-medium disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-purple-700 active:scale-95 transition-all"
        >
          Generate LinkedIn Post
        </button>
      ) : (
        <div className="space-y-3">
          <textarea
            readOnly
            value={generated}
            className="w-full h-40 p-3 bg-white border border-gray-200 rounded-xl text-xs md:text-sm leading-relaxed resize-none focus:outline-none"
          />
          <button
            onClick={copy}
            className="w-full py-3 bg-black text-white rounded-xl text-sm md:text-base font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 active:scale-95 transition-all"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[390px] md:max-w-5xl mx-auto min-h-screen flex flex-col pb-8">
        
        {/* Header */}
        <header className="px-5 md:px-8 pt-6 pb-2 flex items-center gap-3 sticky top-0 bg-white z-10">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 active:scale-95 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">Day {DAY_12.day} of 60</div>
            <div className="font-bold md:text-lg">Today's Challenge</div>
          </div>
        </header>

        {!submitted ? (
          <div className="px-5 md:px-8 py-4 md:py-6 md:grid md:grid-cols-2 md:gap-8">
            
            {/* Task Card */}
            <div className="border border-gray-200 rounded-2xl p-5 md:p-6 h-fit">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 bg-black text-white rounded-full">
                  {DAY_12.track.toUpperCase()}
                </span>
                <span className="text-xs md:text-sm text-gray-500">~3 hours</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold mb-2">{DAY_12.title}</h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                {DAY_12.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {DAY_12.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{req}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 p-3 md:p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <Lightbulb size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-amber-800 leading-relaxed">{DAY_12.tips}</p>
              </div>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm md:text-base font-semibold mb-1.5">Project Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g., SaaS Landing Page"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-1.5">GitHub Repository</label>
                <div className="relative">
                  <GitBranch size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="url"
                    required
                    value={githubUrl}
                    onChange={e => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/repo"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-1.5">Live Deployment URL</label>
                <div className="relative">
                  <ExternalLink size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="url"
                    required
                    value={liveUrl}
                    onChange={e => setLiveUrl(e.target.value)}
                    placeholder="https://your-project.vercel.app"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-1.5">What did you build? (2-3 sentences)</label>
                <textarea
                  required
                  rows={3}
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="I built a responsive landing page using CSS Grid..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-1.5">LinkedIn Post URL</label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={e => setLinkedinUrl(e.target.value)}
                    placeholder="Paste your LinkedIn post link"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <LinkedInGenerator projectTitle={title} projectDesc={desc} />

              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-2xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 active:scale-95 transition-all mt-6"
              >
                Submit Day {DAY_12.day}
              </button>
              
              <p className="text-center text-xs md:text-sm text-gray-400">
                Deadline: {DAY_12.deadline} IST
              </p>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="px-5 md:px-8 py-8 md:py-16 text-center max-w-md mx-auto">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Day {DAY_12.day} Submitted!</h2>
            <p className="text-gray-600 md:text-lg mb-8">
              Great work, {USER.name.split(' ')[0]}! Your streak is now{' '}
              <span className="font-bold text-black">{USER.streak + 1} days</span>.
            </p>
            
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-3.5 bg-black text-white rounded-2xl font-semibold cursor-pointer hover:bg-gray-800 active:scale-95 transition-all"
              >
                Back to Dashboard
              </button>
              <button 
                onClick={() => window.open(linkedinUrl || '#', '_blank')}
                className="w-full py-3.5 border border-gray-200 rounded-2xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 active:scale-95 transition-all"
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