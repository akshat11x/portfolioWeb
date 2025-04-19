export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 1-5
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}