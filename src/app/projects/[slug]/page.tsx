import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { notFound } from 'next/navigation';
import { getContent, getContentBySlug } from '@/lib/posts';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

/**
 * Generates metadata for a project page.
 * @param params - The parameters for generating metadata.
 * @param params.slug - The slug of the project.
 * @returns A promise that resolves to the generated metadata.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getContentBySlug(slug, 'projects');

  return {
    title: post?.metadata.title || 'Projects',
  };
}

/**
 * Generates static parameters for the page.
 * Retrieves projects content and maps it to an array of slugs.
 * @returns An array of slugs.
 */
export async function generateStaticParams() {
  const projects = await getContent('projects');
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getContentBySlug(slug, 'projects');

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt, github } = metadata;

  return (
    <section className="pb-24 pt-20">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ''}
              className="object-cover"
              sizes="100wv"
              priority
              fill
            />
          </div>
        )}

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
          <div className="mt-2 flex gap-2">
            <Link href={github || ''} target="_blank">
              <Button size={'sm'} variant={'default'}>
                GitHub
              </Button>
            </Link>
          </div>
        </header>

        <main className="prose mt-12 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
