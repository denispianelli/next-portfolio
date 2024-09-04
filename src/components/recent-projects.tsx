import Link from 'next/link';
import Projects from '@/components/projects';
import { getContent } from '@/lib/posts';

export default async function RecentProjects() {
  const projects = await getContent('projects', 2);

  return (
    <section className="pb-24">
      <div>
        <h2 className="title mb-12">Recent projects</h2>
        <Projects projects={projects} />

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  );
}
