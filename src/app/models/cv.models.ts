export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  contact: ContactInfo;
  about: string;
  linkedIn: string;
}

export interface SkillTag {
  name: string;
}

export interface Experience {
  period: string;
  contractType: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tasks: string[];
  skills: SkillTag[];
}

export interface Education {
  year: string;
  title: string;
  institution: string;
  details?: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: number;
  description: string;
}
