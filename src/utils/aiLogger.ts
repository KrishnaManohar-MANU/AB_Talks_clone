export interface AILogEntry {
  timestamp: string;
  model: string;
  prompt: string;
  response: string;
  latencyMs?: number;
}

const LOG_KEY = 'abtalks_ai_logs';

export function logAI(entry: Omit<AILogEntry, 'timestamp'>): void {
  const fullEntry: AILogEntry = {
    ...entry,
    timestamp: new Date().toISOString(),
  };
  
  const existing = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
  existing.push(fullEntry);
  localStorage.setItem(LOG_KEY, JSON.stringify(existing));
  
  console.log('[AI LOG]', fullEntry);
}

export function getAILogs(): AILogEntry[] {
  return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
}