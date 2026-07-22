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

export type AboutMeApiResponse = {
  data: AboutMeData;
  message: string;
  message_code: number;
};
