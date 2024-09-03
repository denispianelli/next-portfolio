import MDXContent from '@/components/mdx-content';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * Generates static parameters for the posts.
 *
 * @returns An array of objects containing the slug of each post.
 */
export async function generateStaticParams() {
  const posts = await getPosts();

  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

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

        <main className="prose dark:prose-invert mt-16">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
