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

export type ProjectsApiResponse = {
  data: ProjectItem[];
  message: string;
  message_code: number;
};
