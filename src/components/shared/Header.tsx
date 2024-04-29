import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  isExact?: boolean;
}
const NavLink = ({ href, isExact, children, ...props }: NavLinkProps) => {
  const router = useRouter();
  const isActive = isExact
    ? router.asPath === href
    : router.asPath.includes(href.toString());
  return (
    <Link
      {...props}
      target={
        typeof href === 'string' && href.startsWith('http')
          ? '_blank'
          : undefined
      }
      href={href}
      className={clsx(
        'plain relative block p-2 px-3 text-sm transition ',
        isActive
          ? 'text-primary'
          : 'hover:text-gray-500 dark:hover:text-gray-400'
      )}
    >
      {children}
      {isActive && (
        <span className="from-primary/0 via-primary/40 dark:from-primary/0 dark:via-primary/40 dark:to-primary/0 absolute inset-x-1 -bottom-px h-px bg-gradient-to-r to-teal-500/0"></span>
      )}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between py-4">
        <Link href="/">
          <p className="font-semibold text-gray-900 no-underline dark:text-gray-200">
            VR
          </p>
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center justify-center text-sm font-normal text-zinc-800 dark:text-zinc-200">
            <li>
              <NavLink isExact href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/uses">Uses</NavLink>
            </li>
            <li>
              <NavLink href="/books">Books</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
