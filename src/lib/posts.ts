import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post, PostMetadata } from './definitions';

/**
 * The root directory path for the posts content.
 */
const rootDir = path.join(process.cwd(), 'src', 'content', 'posts');

/**
 * Retrieves a post by its slug.
 *
 * @param slug - The slug of the post.
 * @returns A promise that resolves to a `Post` object if found, or `undefined` if not found.
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const filePath = path.join(rootDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    /**
     * Parses the file contents using the `matter` function and extracts the `data` and `content` properties.
     *
     * @param fileContents - The contents of the file to parse.
     * @returns An object containing the parsed `data` and `content` properties.
     */
    const { data, content } = matter(fileContents);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error(error);
  }
}

/**
 * Retrieves the metadata of a post.
 *
 * @param _filePath - The file path of the post.
 * @returns The post metadata.
 */
export function getPostMetadata(_filePath: string): PostMetadata {
  const slug = _filePath.replace(/\.(mdx|md)/, '');
  const filePath = path.join(rootDir, _filePath);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  return { ...data, slug };
}

/**
 * Retrieves the metadata of the posts.
 *
 * @param limit - The maximum number of posts to retrieve.
 * @returns A promise that resolves to an array of PostMetadata objects.
 */
export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDir);

  /**
   * Sorts an array of posts based on their published date.
   *
   * @param posts - The array of posts to be sorted.
   * @returns The sorted array of posts.
   */
  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? ''))
        return 1;
      else return -1;
    });

  if (limit) return posts.slice(0, limit);

  return posts;
}
