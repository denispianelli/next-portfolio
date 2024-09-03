import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { PostMetadata } from '@/lib/definitions';

/**
 * Renders a list of posts.
 *
 * @param {Object} props - The component props.
 * @param {PostMetadata[]} props.posts - The array of post metadata.
 * @returns {JSX.Element} The rendered list of posts.
 */
export default function Posts({
  posts,
}: {
  posts: PostMetadata[];
}): JSX.Element {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
          >
            <div className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className="mt-1 text-sm font-light">
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
