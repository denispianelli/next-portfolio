import Projects from '@/components/projects';
import { getContent } from '@/lib/posts';
import { Metadata } from 'next';

/**
 * Represents the metadata for a page.
 */
export const metadata: Metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  const projects = await getContent('projects');
  return (
    <section className="container max-w-3xl pb-24 pt-20">
      <h1 className="title mb-12">Projects</h1>
      <Projects projects={projects} />
    </section>
  );
}
