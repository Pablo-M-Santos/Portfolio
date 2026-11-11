import type { IconName } from "./components/Icon";

export interface NavItem {
  label: string;
  href: string;
  accent?: boolean;
}

export interface Stat {
  label: string;
  icon: IconName;
  iconSize?: number;
  value: string;
  valueSize: "xl" | "lg" | "md";
  caption: string;
}

export interface SkillGroup {
  label: string;
  icon: IconName;
  iconWidth?: number;
  items: string[];
}

export interface TrainingItem {
  name: string;
  institution: string;
  period: string;
}

export interface Commit {
  hash: string;
  showHash: string;
  period: string;
  location: string;
  message: string;
  roleTitle: string;
  company: string;
  tags: string[];
  changes: string[];
}

export interface Project {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTags: string[];
  stack: string[];
  cta: string;
  href: string;
  image: { src: string; alt: string };
  mediaClassName: string;
  mediaFirst: boolean;
}

export interface LinkCardData {
  icon: IconName;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ContactCommand {
  command: string;
  icon: IconName;
  text: string;
  href: string;
  external?: boolean;
  isLink?: boolean;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionSummary {
  total: number;
  activeDays: number;
  streak: number;
  bestCount: number;
  bestDate: string;
}
