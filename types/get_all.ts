export type HeroData = {
  hero_id: string;
  email: string;
  fullname_en: string;
  fullname_th: string;
  github_url: string;
  linkedin_url: string;
  typing_texts: string[];
};

export type ExpertiseItem = {
  title: string;
  subtitle: string;
};

export type AboutMeData = {
  greeting_en: string;
  greeting_th: string;
  description_en: string;
  description_th: string;
  sub_description_en: string;
  sub_description_th: string;
  expertiseSection: {
    items: ExpertiseItem[];
  };
};

export type ExperienceItem = {
  experience_id: string;
  namePosition: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  location: string;
  descriptionEN: string;
  descriptionTH: string;
  technologies: string[];
};

export type ProjectItem = {
  project_id: string;
  project_name: string;
  description_en: string;
  description_th: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: string[];
};

export type SkillItem = {
  id: string;
  icon: string;
  name: string;
  order: number;
  score: number;
  max_score: number;
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
};

export type SkillTechnologies = {
  skill_sections: SkillSection[];
  summary_stats: SummaryStat[];
};

export type GetInTouchData = {
  get_in_touch_id: string;
  email: string;
  phone: string;
  location_en: string;
  location_th: string;
  description_en: string;
  description_th: string;
};

export type PortfolioData = {
  hero: HeroData;
  about_me: AboutMeData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skill_technologies: SkillTechnologies;
  get_in_touch: GetInTouchData;
};

export type PortfolioApiResponse = {
  data: PortfolioData;
  message: string;
  message_code: number;
};
