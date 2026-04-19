
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string[];
  tags: string[];
  isComingSoon?: boolean;
  mvpLink?: string;
}

export type ProjectType = 'agency' | 'startup' | 'internship' | 'real-world' | 'mvp' | 'prd-teardown' | 'brd';

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}