import Intro from '@/components/intro';
import BlurFade from '@/components/magicui/blur-fade';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';
import Skills from '@/components/skills';
import { Testimonials } from '@/components/testimonials';

const BLUR_FADE_DELAY = 0.04;

/**
 * Renders the Home component.
 *
 * @returns The rendered Home component.
 */
export default function Home() {
  return (
    <section className="container max-w-4xl py-20">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Intro />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <Skills />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <RecentPosts />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <RecentProjects />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <Testimonials />
      </BlurFade>
    </section>
  );
}
