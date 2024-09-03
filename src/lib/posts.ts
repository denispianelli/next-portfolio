import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './definitions';

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
