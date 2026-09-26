export type ProjectCategory = 'All' | 'Mobile' | 'Web & Backend' | 'AI & Computer Vision' | 'Infrastructure';

export interface Project {
  id: string;
  title: string;
  period?: string;
  summary?: string;
  description: string;
  background?: string;
  role?: string;
  category: 'Mobile' | 'Web & Backend' | 'AI & Computer Vision' | 'Infrastructure';
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface SkillItem {
  name: string;
  category: string;
  level?: SkillLevel;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeText: string;
  description: string;
  image: string;
  pdfUrl: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  responsibilities: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
