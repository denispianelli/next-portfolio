import Intro from '@/components/intro';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';
import Skills from '@/components/skills';

/**
 * Renders the Home component.
 *
 * @returns The rendered Home component.
 */
export default function Home() {
  return (
    <section className="container max-w-3xl py-20">
      <Intro />
      <Skills />
      <RecentPosts />
      <RecentProjects />
    </section>
  );
}
