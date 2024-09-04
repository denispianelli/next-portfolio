interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

/**
 * Represents the email template for a contact form submission.
 *
 * @component
 * @example
 * ```tsx
 * <ContactFormEmail
 *   name="John Doe"
 *   email="johndoe@example.com"
 *   message="Hello, I have a question."
 * />
 * ```
 */
const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
