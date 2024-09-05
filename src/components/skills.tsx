import { Badge } from './ui/badge';

export default function Skills() {
  return (
    <section className="pb-24">
      {/* <h2 className="title mb-12">Skills</h2> */}
      <div className="mb-2 flex justify-center">
        <Badge className="text-sm">Skills</Badge>
      </div>
      <h2 className="title mb-12 text-center text-4xl font-semibold no-underline">
        Bringing expertise to every challenge
      </h2>
      <div className="flex flex-wrap gap-1">
        <Badge variant={'secondary'}>React</Badge>
        <Badge variant={'secondary'}>Next.js</Badge>
        <Badge variant={'secondary'}>JavaScript</Badge>
        <Badge variant={'secondary'}>TypeScript</Badge>
        <Badge variant={'secondary'}>HTML</Badge>
        <Badge variant={'secondary'}>CSS</Badge>
        <Badge variant={'secondary'}>Tailwind CSS</Badge>
        <Badge variant={'secondary'}>Node.js</Badge>
        <Badge variant={'secondary'}>Express</Badge>
        <Badge variant={'secondary'}>Postgres</Badge>
        <Badge variant={'secondary'}>Git</Badge>
        <Badge variant={'secondary'}>Vercel</Badge>
      </div>
    </section>
  );
}
