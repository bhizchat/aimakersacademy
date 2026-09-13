import {
  BrainCircuit,
  Code2,
  Gamepad2,
  GitBranch,
  Globe,
  Layers,
  Music2,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  UploadCloud,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Course, ModuleIcon } from "@/types/course";

export const courseIconMap: Record<Course["icon"], LucideIcon> = {
  iphone: Smartphone,
  android: Smartphone,
  web: Globe,
  game: Gamepad2,
  video: Video,
};

export const moduleIconMap: Record<ModuleIcon, LucideIcon> = {
  brain: BrainCircuit,
  code: Code2,
  layers: Layers,
  sparkles: Sparkles,
  shield: ShieldCheck,
  "git-branch": GitBranch,
  cloud: UploadCloud,
  trophy: Trophy,
  palette: Palette,
  music: Music2,
};
