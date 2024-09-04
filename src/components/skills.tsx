import { Badge } from './ui/badge';

export default function Skills() {
  return (
    <section className="pb-24">
      <h2 className="title mb-12">Skills</h2>
      <div className="flex flex-wrap gap-1">
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>JavaScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>HTML</Badge>
        <Badge>CSS</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Node.js</Badge>
        <Badge>Express</Badge>
        <Badge>Postgres</Badge>
        <Badge>Git</Badge>
        <Badge>Vercel</Badge>
      </div>
    </section>
  );
}
