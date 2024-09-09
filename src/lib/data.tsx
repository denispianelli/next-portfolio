import GitHub from '@/components/icons/github';
import LinkedIn from '@/components/icons/linkedin';
import { FolderKanban, HomeIcon, Mail, NotebookText } from 'lucide-react';

export const DATA = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/posts', icon: NotebookText, label: 'Posts' },
    { href: '/projects', icon: FolderKanban, label: 'Projects' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/denispianelli',
        icon: GitHub,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/denis-pianelli/',
        icon: LinkedIn,
      },
    },
  },
};
