import Image from 'next/image';
import Link from 'next/link';

import { ContentMetadata } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import GitHub from './icons/github';

export default function Projects({
  projects,
}: {
  projects: ContentMetadata[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.slug}
          className={
            'h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
          }
        >
          <li className="group relative">
            <Link href={`/projects/${project.slug}`}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  width={500}
                  height={300}
                  priority
                  className="h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </Link>
          </li>
          <CardHeader className="px-2">
            <div className="space-y-1">
              <CardTitle className="mt-1 text-base">{project.title}</CardTitle>
              <time className="font-sans text-xs">{project.publishedAt}</time>
            </div>
            <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {project.summary}
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col px-2">
            {project.tags && (
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant={'secondary'}
                    className="px-1 py-0 text-[10px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="px-2 pb-2">
            {project.github && (
              <Link href={project.github}>
                <Badge className="flex items-center gap-2 text-[10px]">
                  <GitHub /> Source
                </Badge>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
