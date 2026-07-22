export type SkillItem = {
  id: string;
  icon: string;
  name: string;
  order: number;
  score: number;
  max_score: number;
  is_visible: boolean;
  level_color: string;
};

export type SkillSection = {
  id: string;
  title: string;
  items: SkillItem[];
};

export type SummaryStat = {
  id: string;
  label: string;
  value: string;
  order: number;
  is_visible: boolean;
  value_color: string;
};

export type SkillTechnologies = {
  skill_sections: SkillSection[];
  summary_stats: SummaryStat[];
};

export type SkillTechnologiesApiResponse = {
  data: SkillTechnologies;
  message: string;
  message_code: number;
};
