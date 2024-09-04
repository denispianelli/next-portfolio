import Intro from '@/components/intro';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';

/**
 * Renders the Home component.
 *
 * @returns The rendered Home component.
 */
export default function Home() {
  return (
    <section className="container max-w-3xl py-20">
      <Intro />
      <RecentPosts />
      <RecentProjects />
    </section>
  );
}
