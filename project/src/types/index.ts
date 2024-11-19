export type UserRole = 'intern' | 'internal-mentor' | 'external-mentor' | 'coordinator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Intern extends User {
  company: string;
  startDate: string;
  endDate: string;
  mentor: string;
  externalMentor: string;
  stipend: number;
}

export interface Report {
  id: string;
  internId: string;
  type: 'fortnightly' | 'monthly';
  submissionDate: string;
  content: string;
  status: 'pending' | 'reviewed';
  score?: number;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  city: string;
  registrationNumber: string;
}