export type PostMetadata = {
  slug: string;
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
};

export type Post = {
  metadata: PostMetadata;
  content: string;
};
