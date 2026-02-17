import { CertificationItem, EducationItem, ExperienceItem, SkillItem } from './types';

export const PROFILE_DATA = {
  name: 'Arnav Srivastava',
  title: 'HR Specialization Student @ UPES',
  headline: 'Aspiring HR Professional | Integrated BBA-MBA (2024-2028)',
  location: 'Dehradun, Uttarakhand, India',
  email: 'arnavsrivastava2006@gmail.com',
  phone: '9508627649',
  linkedin: 'https://www.linkedin.com/in/arnav-srivastava-7b8117317/',
  summary: "Hi, I’m Arnav Srivastava, currently in my 2nd year of the BBA–MBA Integrated program at UPES, specializing in Human Resources. I’ve always been curious about how people, teams, and organizations work together. That’s what drew me toward HR—because it’s about more than policies, it’s about people, culture, and growth. Right now, I’m building my foundation in HR concepts while also exploring areas like sustainability, CSR, and business analytics. I believe the future of HR is not just managing people, but empowering them and aligning their growth with the organization’s goals. I’m excited to keep learning, gain hands-on experience and grow into a professional who can make a positive impact in the workplace."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Arthneeti - The Economics Society of UPES',
    role: 'Human Resources Executive',
    period: 'January 2026 - Present',
    duration: '2 months',
    location: 'Dehradun'
  },
  {
    company: 'UPES',
    role: 'Student',
    period: 'July 2024 - Present',
    duration: '1 year 8 months',
    location: 'Dehradun'
  },
  {
    company: 'McKinsey & Company',
    role: 'Learner McKinsey Forward program',
    period: 'October 2025 - January 2026',
    duration: '4 months'
  },
  {
    company: 'Coal India Limited',
    role: 'Summer Intern',
    period: 'June 2025 - July 2025',
    duration: '2 months',
    location: 'India'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'UPES',
    degree: 'Integrated (BBA+MBA), Business',
    period: 'July 2024 - August 2028'
  },
  {
    school: 'Kairali School',
    degree: 'Primary & Secondary Education',
    period: 'Completed'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Team Problem Solving', category: 'professional' },
  { name: 'Problem Solving', category: 'professional' },
  { name: 'Project Management', category: 'professional' },
  { name: 'HR Management', category: 'professional' },
  { name: 'Business Analytics', category: 'professional' },
  { name: 'Sustainability & CSR', category: 'professional' }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'McKinsey Forward Program',
    provider: 'McKinsey & Company'
  }
];
