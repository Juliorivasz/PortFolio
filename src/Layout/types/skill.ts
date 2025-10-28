export const SKILL_LEVELS = {
  ADVANCED: "Advanced",
  INTERMEDIATE: "Intermediate",
  BASIC: "Basic",
} as const;

export type SkillLevel = typeof SKILL_LEVELS[keyof typeof SKILL_LEVELS];
export interface Skill {
  name: string;
  level: SkillLevel;
}


export type SkillCategory = {
  title: string;
  skills: Skill[];
};
