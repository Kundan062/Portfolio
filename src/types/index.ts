export interface NavLink {
  name: string;
  href: string;
  icon?: string;
  section?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Course {
  title: string;
  provider: string;
  year: string;
  certificate?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  type: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Position {
  title: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
}