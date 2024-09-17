import { DATA } from '@/lib/data';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${DATA.baseUrl}/sitemap.xml`,
  };
}
