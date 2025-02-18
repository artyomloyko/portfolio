import { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';

type NavigationLink = { title: string; displayTitle?: ReactNode } & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

const navigationLinks: NavigationLink[] = [
  // { href: '/blog', title: 'Blog' },
  { href: '/about', title: 'About' },
  // { href: '/projects', title: 'Projects' },
];

if (process.env.NEXT_PUBLIC_CV_URL) {
  navigationLinks.unshift({
    href: process.env.NEXT_PUBLIC_CV_URL,
    target: '_blank',
    rel: "noopener noreferrer",
    title: 'Resume',
    displayTitle: (
      <span className="inline-flex gap-1">
        Resume
        <FiExternalLink />
      </span>
    ),
  });
}

export { navigationLinks };
