export type HeroData = {
  hero_id: string;
  email: string;
  fullname_en: string;
  fullname_th: string;
  github_url: string;
  linkedin_url: string;
  typing_texts: string[];
};

export type HeroApiResponse = {
  data: HeroData;
  message: string;
  message_code: number;
};
