import { z } from "zod";

export const contactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().trim().min(1, t("validate.name")),
    email: z
      .string()
      .trim()
      .min(1, t("validate.email"))
      .email(t("validate.emailInvalid")),
    message: z.string().trim().min(1, t("validate.message")),
  });

export type ContactForm = z.infer<ReturnType<typeof contactSchema>>;
