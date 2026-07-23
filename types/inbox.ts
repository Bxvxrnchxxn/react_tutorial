export type InboxCreatePayload = {
  name: string;
  email: string;
  message: string;
  lang: "th" | "en";
};

export type InboxCreateApiResponse = {
  data: { inbox_id: string };
  message: string;
  message_code: number;
};
