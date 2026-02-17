export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location?: string;
  description?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface SkillItem {
  name: string;
  category: 'professional' | 'technical' | 'soft';
}

export interface CertificationItem {
  name: string;
  provider: string;
}
