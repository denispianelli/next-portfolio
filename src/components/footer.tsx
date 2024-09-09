/**
 * Footer component.
 *
 * @returns The rendered Footer component.
 */
export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container max-w-3xl px-0">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Denis Pianelli. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
