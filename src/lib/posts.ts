import path from 'path';
import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import { Content, ContentMetadata } from './definitions';

/**
 * Returns the root directory path for the specified subdirectory.
 *
 * @param subDir - The subdirectory within the root directory.
 * @returns The root directory path.
 */
function getRootDir(subDir: string): string {
  return path.join(process.cwd(), 'src', 'content', subDir);
}

/**
 * Retrieves content by slug from a specified subdirectory.
 *
 * @param slug - The slug of the content to retrieve.
 * @param subDir - The subdirectory where the content is located.
 * @returns A promise that resolves to the retrieved content, or undefined if an error occurs.
 */
export async function getContentBySlug(
  slug: string,
  subDir: string,
): Promise<Content | undefined> {
  try {
    const rootDir = getRootDir(subDir);
    const filePath = path.join(rootDir, `${slug}.mdx`);
    const fileContents = await fsPromises.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error(`Error fetching content by slug: ${slug}`, error);
    return undefined;
  }
}

/**
 * Retrieves the metadata for a content file.
 *
 * @param filePath - The path of the content file.
 * @param subDir - The subdirectory of the content file.
 * @returns A promise that resolves to the content metadata, or undefined if an error occurs.
 */
export async function getContentMetadata(
  filePath: string,
  subDir: string,
): Promise<ContentMetadata | undefined> {
  try {
    const rootDir = getRootDir(subDir);
    const slug = filePath.replace(/\.(mdx|md)/, '');
    const fullPath = path.join(rootDir, filePath);
    const fileContent = await fsPromises.readFile(fullPath, 'utf8');
    const { data } = matter(fileContent);
    return { ...data, slug };
  } catch (error) {
    console.error(`Error fetching metadata for file: ${filePath}`, error);
    return undefined;
  }
}

/**
 * Retrieves the content metadata from the specified subdirectory.
 *
 * @param subDir - The subdirectory path.
 * @param limit - The maximum number of content metadata to retrieve.
 * @returns A promise that resolves to an array of ContentMetadata objects.
 */
export async function getContent(
  subDir: string,
  limit?: number,
): Promise<ContentMetadata[]> {
  try {
    const rootDir = getRootDir(subDir);
    const files = await fsPromises.readdir(rootDir);

    const allContent = (
      await Promise.all(files.map((file) => getContentMetadata(file, subDir)))
    )
      .filter((content): content is ContentMetadata => content !== undefined)
      .sort((a, b) => {
        return (
          new Date(b.publishedAt ?? '').getTime() -
          new Date(a.publishedAt ?? '').getTime()
        );
      });

    return limit ? allContent.slice(0, limit) : allContent;
  } catch (error) {
    console.error(`Error fetching content in directory: ${subDir}`, error);
    return [];
  }
}
