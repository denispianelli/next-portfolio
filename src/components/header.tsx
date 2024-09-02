import Link from 'next/link';
import ThemeToggle from './theme-toggle';

/**
 * Renders the header component.
 *
 * @returns The rendered header component.
 */
export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            DP
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
