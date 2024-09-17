import MDXContent from '@/components/mdx-content';
import { getContent, getContentBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * Generates metadata for a post based on the provided slug.
 * @param params - The parameters object.
 * @param params.slug - The slug of the post.
 * @returns A promise that resolves to the generated metadata.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getContentBySlug(slug, 'posts');

  return {
    title: post?.metadata.title || 'Posts',
  };
}

/**
 * Generates static parameters for the posts.
 *
 * @returns An array of objects containing the slug of each post.
 */
export async function generateStaticParams() {
  const posts = await getContent('posts');

  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getContentBySlug(slug, 'posts');

  if (!post) return notFound();

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-16">
      <div className="container max-w-3xl">
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to posts</span>
        </Link>

        {image && (
          <Image
            src={image}
            alt={title || ''}
            width={800}
            height={400}
            priority
          />
        )}

        <header className="mt-8">
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
