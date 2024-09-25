import { DATA } from '@/lib/data';
import { Dock, DockIcon } from './magicui/dock';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
      <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    aria-label={item.label}
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <item.icon className="size-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social).map(([key, value]) => (
          <DockIcon key={key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={value.url} target="_blank">
                  <Button
                    aria-label={value.name}
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <value.icon className="size-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{value.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
