export type ContentMetadata = {
  slug: string;
  title?: string;
  summary?: string;
  image?: string;
  video?: string;
  author?: string;
  publishedAt?: string;
  github?: string;
  website?: string;
  tags?: string[];
};

export type Content = {
  metadata: ContentMetadata;
  content: string;
};
