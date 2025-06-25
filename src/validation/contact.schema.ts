import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "กรุณากรอกชื่อ"),
  email: z.string().trim().min(1, "กรุณากรอกอีเมล"),
  message: z.string().trim().min(1, "กรุณากรอกข้อความ"),
});

export type ContactForm = z.infer<typeof contactSchema>;
