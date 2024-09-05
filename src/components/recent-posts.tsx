import { getContent } from '@/lib/posts';
import Posts from './posts';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default async function RecentPosts() {
  const posts = await getContent('posts', 4);

  return (
    <section className="pb-24">
      <div>
        {/* <h2 className="title mb-12">Recent posts</h2> */}
        <div className="mb-2 flex justify-center">
          <Badge className="text-sm">Recent posts</Badge>
        </div>
        <h2 className="title mb-12 text-center text-4xl font-semibold no-underline">
          Explore my recent posts
        </h2>
        <Posts posts={posts} />

        <Link
          href={`/posts`}
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  );
}
