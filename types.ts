
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon: string; // Lucide icon name or URL
  image?: string; // Optional local image path
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
  certificate?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'Job' | 'Internship' | 'Project' | 'Award' | 'Competition' | 'Activity';
  certificate?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  cv?: string;
}
