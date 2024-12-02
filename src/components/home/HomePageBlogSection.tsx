import { ArrowRight } from '@phosphor-icons/react';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const BlogPostOneLine = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center justify-between rounded-lg ">
      <Link
        className="plain text-md !no-underline hover:text-primary"
        href={`/blog/${post.slug}`}
      >
        {post.title}
      </Link>
      <time dateTime={post.date} className="font-mono text-xxs">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
};

export default function HomePageBlogSection() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <div className="my-24">
      <h2 className="text-md font-mono font-semibold uppercase text-zinc-400 dark:text-zinc-600">
        Writings
      </h2>
      <div className="my-4 space-y-4">
        {posts.map((post) => (
          <BlogPostOneLine key={post.slug} post={post} />
        ))}
      </div>
      <Link
        className="plain flex items-center font-mono text-xs !no-underline hover:text-primary"
        href="/blog"
      >
        View all posts
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
