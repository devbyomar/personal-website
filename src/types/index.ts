export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  whyItMatters: string;
  architectureOverview: string;
  stack: StackItem[];
  technicalDecisions: TechnicalDecision[];
  tradeoffs: string[];
  scalingConsiderations: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface StackItem {
  name: string;
  purpose: string;
}

export interface TechnicalDecision {
  decision: string;
  reasoning: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
