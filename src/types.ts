export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  timeline: string;
  role: string;
  coreStack: string;
  backendExecution: string;
  imageUrl: string;
  imageAlt: string;
  videoUrl?: string;
  leadParagraph: string;
  subheading: string;
  subParagraph: string;
  ctaText: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  stackHeading?: string;
  stackBadges: string[];
  modalData: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; detail: string }[];
    architectureNotes: string[];
    metricsBreakdown?: { label: string; stat: string }[];
  };
}

export interface SecondaryProject {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  stackHeading?: string;
  stack: string[];
  highlightColor?: string;
  mockupType: 'breaksy' | 'wordpress' | 'omnisync' | 'weather';
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  galleryImages?: string[];
  modalData: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; detail: string }[];
    architectureNotes: string[];
    metricsBreakdown?: { label: string; stat: string }[];
  };
}

export interface ToolkitTab {
  id: string;
  number: string;
  title: string;
  summary: string;
  label: string;
  file: string;
  previewTitle: string;
  previewDesc: string;
  code: string;
  pills: string[];
}

export interface EngagementModel {
  title: string;
  tag: string;
  description: string;
}

export interface BespokeSolution {
  category: string;
  title: string;
  subtitle: string;
  description: string;
}
