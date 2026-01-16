
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
