'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormSchema } from '@/lib/schemas';
import ContactFormEmail from '@/components/email-template';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using the provided contact form data.
 *
 * @param data - The contact form inputs.
 * @returns An object with either a success or error property.
 */
export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: 'contact@denispianelli.dev',
      to: [email],
      cc: ['contact@denispianelli.dev'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
