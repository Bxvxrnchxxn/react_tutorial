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

export type ExperienceApiResponse = {
  data: ExperienceItem[];
  message: string;
  message_code: number;
};
