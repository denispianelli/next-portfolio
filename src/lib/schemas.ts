import { z } from 'zod';

/**
 * Defines the ContactFormSchema object.
 *
 * @remarks
 * This schema represents the structure and validation rules for a contact form.
 *
 * @public
 */
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .min(2, { message: 'Must be at least 2 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('Invalid email.'),
  message: z.string().min(1, { message: 'Message is required.' }),
});
