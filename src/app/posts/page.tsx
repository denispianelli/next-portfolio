import Posts from '@/components/posts';
import Search from '@/components/ui/search';
import { getContent } from '@/lib/posts';

/**
 * Renders the PostsPage component.
 *
 * @param searchParams - Optional search parameters.
 * @returns The rendered PostsPage component.
 */
export default async function PostsPage({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const query = searchParams?.query || '';
  const posts = await getContent('posts');
  const filteredPosts = posts.filter(
    (post) =>
      post.title && post.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="container max-w-3xl pb-24 pt-20">
      <h1 className="title mb-12">Posts</h1>
      <Search placeholder="Search posts..." />
      <Posts posts={filteredPosts} />
    </section>
  );
}
