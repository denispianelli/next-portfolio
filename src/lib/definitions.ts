export type ContentMetadata = {
  slug: string;
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  github?: string;
};

export type Content = {
  metadata: ContentMetadata;
  content: string;
};
