import type { LinkProps } from 'next/link';
import Link from 'next/link';
import React from 'react';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}
const NavLink = ({ href, children, ...props }: NavLinkProps) => (
  <li>
    <Link
      {...props}
      target={
        typeof href === 'string' && href.startsWith('http')
          ? '_blank'
          : undefined
      }
      href={href}
      className={
        'relative block p-2 px-3 text-sm transition hover:text-gray-500 dark:hover:text-gray-400'
      }
    >
      {children}
    </Link>
  </li>
);
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center">
        <nav>
          <ul className="my-5 flex flex-wrap items-center justify-center rounded-full bg-white/90 px-2 text-sm font-normal text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/tools">Tools</NavLink>
            <NavLink href="/books">Books</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
