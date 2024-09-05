import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { Badge } from './ui/badge';
import Image from 'next/image';

const reviews = [
  {
    name: 'Etienne',
    username: '@Etienne-Oclock',
    body: 'Overall, you are a brilliant and very diligent student. Your seriousness and determination are admirable.',
    img: '/images/testimonials/etienne.png',
  },
  {
    name: 'Benjamin',
    username: '@BNoClock',
    body: 'Everything done demonstrates a certain level of mastery and professional rigor. Congratulations!',
    img: '/images/testimonials/benjamin.png',
  },
  {
    name: 'Ghislain',
    username: '@ghislaingirardeau',
    body: 'You have an incredible ability to grasp complex concepts and put them into practice quickly.',
    img: '/images/testimonials/ghislain.png',
  },
  {
    name: 'Laurent',
    username: '@Kenshirosan',
    body: 'Your code is always clean and well-structured. This is exactly what we expect from a future developer.',
    img: '/images/testimonials/laurent.png',
  },
  {
    name: 'Julien',
    username: '@jMoirenc',
    body: 'Your ability to work in a team and share your knowledge is impressive.',
    img: '/images/testimonials/julien.png',
  },
  {
    name: 'Yann',
    username: '@YannOclock',
    body: 'You have the profile of a developer who will go far in this career.',
    img: '/images/testimonials/yann.png',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div>
      <div className="mb-2 flex justify-center">
        <Badge className="text-sm">Testimonials</Badge>
      </div>
      <h2 className="title mb-12 text-center text-4xl font-semibold no-underline">
        What others say about my work
      </h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
