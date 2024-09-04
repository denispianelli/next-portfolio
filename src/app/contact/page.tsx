import ContactForm from '@/components/contact-form';

/**
 * Renders the ContactPage component.
 *
 * @returns The rendered ContactPage component.
 */
export default function ContactPage() {
  return (
    <section className="container max-w-3xl pb-24 pt-20">
      <h2 className="title">Let's talk about your project</h2>
      <ContactForm />
    </section>
  );
}
