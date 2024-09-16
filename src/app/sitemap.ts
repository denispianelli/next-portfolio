import { getContent } from '@/lib/content';
import { DATA } from '@/lib/data';

export default async function sitemap() {
  const posts = await getContent('posts');
  const projects = await getContent('projects');

  const postsUrls = posts.map((post) => ({
    url: `${DATA.baseUrl}/posts/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const projectsUrls = projects.map((project) => ({
    url: `${DATA.baseUrl}/projects/${project.slug}`,
    lastModified: project.publishedAt,
  }));

  const routes = [
    { url: `${DATA.baseUrl}/posts`, lastModified: new Date().toISOString() },
    { url: `${DATA.baseUrl}/projects`, lastModified: new Date().toISOString() },
    { url: `${DATA.baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  const urls = [
    { url: DATA.baseUrl, lastModified: new Date().toISOString() },
    ...postsUrls,
    ...projectsUrls,
    ...routes,
  ];

  return urls;
}
