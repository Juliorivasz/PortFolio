export type Skill = {
  name: string;
  level: "Básico" | "Intermedio" | "Avanzado";
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};
