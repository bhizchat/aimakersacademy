export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type ModuleIcon =
  | "brain"
  | "code"
  | "layers"
  | "sparkles"
  | "shield"
  | "git-branch"
  | "cloud"
  | "trophy"
  | "palette"
  | "music";

export interface CourseModule {
  title: string;
  lessons: string[];
  icon: ModuleIcon;
  subtitle?: string;
  note?: string;
  learnItems?: string[];
  sections?: WeekSection[];
  outcome?: WeekOutcome;
  deliverable?: string;
}

export type WeekBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "workflow"; text: string }
  | { type: "checklist"; items: string[] }
  | { type: "numbered"; items: { title: string; body: string }[] };

export interface WeekSection {
  heading: string;
  title?: string;
  blocks: WeekBlock[];
}

export interface WeekOutcome {
  heading: string;
  blocks: WeekBlock[];
}

export interface Course {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  level: CourseLevel;
  duration: string;
  format: string;
  skills: string[];
  outcomes: string[];
  curriculum: CourseModule[];
  gradient: string;
  icon: "iphone" | "android" | "web" | "game" | "video";
}
