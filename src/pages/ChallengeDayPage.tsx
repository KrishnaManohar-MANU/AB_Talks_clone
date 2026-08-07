import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Send, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { useChallenge } from '../store/ChallengeContext';
import { logAI } from '../utils/aiLogger';

async function getAIFeedback(project: { title: string; description: string; techStack: string[] }) {
  const startTime = Date.now();
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const feedbacks = [
    `Great choice using ${project.techStack[0]}! Consider adding unit tests and a README with setup instructions.`,
    `Strong foundation! I recommend implementing error handling and adding a CI/CD pipeline.`,
    `Excellent work! To level up: add TypeScript strict mode and deploy to Vercel.`,
    `Nice start! Focus on responsive design and accessibility (ARIA labels).`,
  ];
  const response = feedbacks[Math.floor(Math.random() * feedbacks.length)];
  
  logAI({
    model: 'gpt-4o-mini',
    prompt: `Review: ${project.title}. Tech: ${project.techStack.join(', ')}`,
    response,
    latencyMs: Date.now() - startTime,
  });
  
  return response;
}

export default function ChallengeDayPage() {
  const { dayNumber } = useParams();
  const navigate = useNavigate();
  const { addSubmission, getSubmissionForDay } = useChallenge();
  const day = parseInt(dayNumber || '1');
  
  const existing = getSubmissionForDay(day);
  
  const [title, setTitle] = useState(existing?.title || '');
  const [repoUrl, setRepoUrl] = useState(existing?.repoUrl || '');
  const [description, setDescription] = useState(existing?.description || '');
  const [techStack, setTechStack] = useState(existing?.techStack.join(', ') || '');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(existing?.aiFeedback || '');
  const [submitted, setSubmitted] = useState(!!existing);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const techArray = techStack.split(',').map(t => t.trim()).filter(Boolean);
    const aiFeedback = await getAIFeedback({ title, description, techStack: techArray });
    
    addSubmission({
      day, title, repoUrl, description,
      techStack: techArray,
      aiFeedback,
      submittedAt: new Date().toISOString(),
      status: 'completed',
    });
    
    setFeedback(aiFeedback);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <button 
          onClick={() => navigate('/dashboard')} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <div className="text-purple-400 font-semibold">Day {day} of 60</div>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {submitted ? 'Submission Complete!' : `Day ${day} Challenge`}
        </h1>
        <p className="text-gray-400 mb-6">
          {submitted 
            ? 'Great job! Check your AI feedback below.' 
            : 'What did you build today? Submit your project for AI-powered feedback.'}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g., Real-time Chat App"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Repository URL</label>
              <input
                type="url"
                required
                value={repoUrl}
                onChange={e => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/project"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="What does it do? What problem does it solve?"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tech Stack (comma separated)</label>
              <input
                type="text"
                required
                value={techStack}
                onChange={e => setTechStack(e.target.value)}
                placeholder="React, TypeScript, Tailwind, Node.js"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  AI Analyzing your project...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit & Get AI Feedback
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <CheckCircle className="text-green-500" size={24} />
              <div>
                <div className="font-semibold text-green-400">Successfully Submitted!</div>
                <div className="text-sm text-green-300/70">{title}</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-400" size={20} />
                <h3 className="text-lg font-semibold">AI Mentor Feedback</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feedback}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl font-medium transition-all"
              >
                Back to Dashboard
              </button>
              {day < 60 && (
                <button
                  onClick={() => navigate(`/day/${day + 1}`)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-all"
                >
                  Next Day →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}