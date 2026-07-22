export type GetInTouchData = {
  get_in_touch_id: string;
  email: string;
  phone: string;
  location_en: string;
  location_th: string;
  description_en: string;
  description_th: string;
};

export type GetInTouchApiResponse = {
  data: GetInTouchData;
  message: string;
  message_code: number;
};
