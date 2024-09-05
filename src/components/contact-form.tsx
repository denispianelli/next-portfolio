'use client';

import { useForm, useFormState } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { ContactFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/actions';

/**
 * Renders a contact form component.
 *
 * @returns The rendered contact form component.
 */
export default function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    const result = await sendEmail(values);

    if (result?.error) {
      toast.error('An error occurred. Please try again later.');
      return;
    }

    toast.success('Message sent successfully!');
    form.reset();
  }
  return (
    <section className="relative isolate">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-16 space-y-8"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="sr-only">Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={'Name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="sr-only">Email</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={'Email'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="sr-only">Message</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    maxLength={2000}
                    placeholder={'Message'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>
    </section>
  );
}

function SubmitButton() {
  const { isSubmitting } = useFormState();

  return (
    <Button className="w-full" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 size-6 animate-spin" />
          Submitting...
        </>
      ) : (
        'Send message'
      )}
    </Button>
  );
}
