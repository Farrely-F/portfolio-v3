import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
