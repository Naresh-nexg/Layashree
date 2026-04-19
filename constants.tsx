import { Project, Experience, ProjectType } from './types';

// Global Contact Info
export const CONTACT_INFO = {
  email: 'layashreejn@gmail.com', // Placeholder as not in PDF
  instagram: '#',
  resume: 'https://drive.google.com/file/d/1LBOircw998h7ouXP_H1TEC1qQzvOoSvP/view?usp=sharing',
  linkedIn: 'https://www.linkedin.com/in/layashreejn',
};

// Extended Project type for internal categorization
export interface CategorizedProject extends Project {
  type: ProjectType;
}

export const PROJECTS: CategorizedProject[] = [
  {
    id: 'nexinbe-saas',
    title: 'Nexinbe — Agency Portfolio',
    category: 'Founder’s Office · Execution',
    type: 'agency',
    description: 'Supporting startup execution and structured SaaS delivery systems, contributing to scalable workflows and agentic software development.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    metrics: ['Roadmap Tracking', 'SaaS Delivery'],
    tags: ['Startup Execution', 'SaaS', 'Agentic Workflows'],
    mvpLink: 'https://myportfolio-nexinbe.vercel.app/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nexinbe-exp',
    role: 'Founder’s Office Associate',
    company: 'Nexinbe Agency',
    duration: 'Dec 2025 – Present',
    description: 'Supporting startup execution and structured SaaS delivery systems, working closely with the founding team.',
    achievements: [
      'Worked directly with founders to support startup execution and client delivery workflows.',
      'Assisted in roadmap tracking for SaaS and web application projects.',
      'Contributed to research, validation, and structured documentation.',
      'Supported PRD drafting and feature breakdown preparation.',
      'Coordinated cross-functional execution across product, development, and creative teams.',
      'Contributed to agentic software development workflows for scalable application builds.',
      'Assisted in sprint tracking and milestone monitoring.'
    ]
  },
  {
    id: 'education-dsce',
    role: 'Bachelor\'s degree, Computer Science Engineering - Data Science',
    company: 'Dayananda Sagar College of Engineering, BANGALORE',
    duration: 'Sept 2023 – June 2027',
    description: 'Pursuing a degree in Computer Science and Engineering with a focus on Data Science.',
    achievements: [
      'Focusing on learning, building, and contributing within AI-native and SaaS ecosystems.',
      'Gaining hands-on exposure to early-stage startup operations and product execution.',
      'Certification: Deloitte Australia - Data Analytics Job Simulation.',
      'Certification: Introduction to Generative AI.',
      'Certification: Introduction to Large Language Models.'
    ]
  },
  {
    id: 'education-presidency',
    role: 'Higher Secondary School, Science',
    company: 'Presidency PU college',
    duration: 'June 2021 – March 2023',
    description: 'Completed Higher Secondary School with a focus on Science.',
    achievements: []
  },
  {
    id: 'education-varin',
    role: 'Secondary School, Class X, ICSE',
    company: 'Varin International Residential school and college',
    duration: 'June 2020 – April 2021',
    description: 'Completed Secondary School under the ICSE board.',
    achievements: []
  }
];