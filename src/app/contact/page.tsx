import ContactForm from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';

/**
 * Renders the ContactPage component.
 *
 * @returns The rendered ContactPage component.
 */
export default function ContactPage() {
  return (
    <section className="container max-w-3xl pb-24 pt-20">
      <div className="mb-2 flex justify-center">
        <Badge className="text-sm">Contact</Badge>
      </div>
      <h2 className="title mb-12 text-center text-4xl font-semibold no-underline">
        Let's get in touch
      </h2>
      <ContactForm />
    </section>
  );
}
