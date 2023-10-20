// app/page.tsx
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

import PageHeader from '../components/shared/PageHeader';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

function PostCard(post: Post) {
  return (
    <div className="group mb-10 space-x-3 space-y-1 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <time
        dateTime={post.date}
        className="mb-4 rounded-full font-mono text-xxs xl:text-xs"
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>

      <Link
        href={`/blog/${post.slug}`}
        className="plain space-y-3 xl:col-span-3"
      >
        <div className="rounded-lg xl:p-4 xl:hover:bg-gray-100 xl:dark:hover:bg-black">
          <h2 className="mb-1 text-xl font-normal text-gray-900 group-hover:text-primary dark:text-gray-100 dark:group-hover:text-primary">
            {post.title}
          </h2>
          <p className="text-base font-normal text-gray-500">
            {post.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Main
      meta={
        <Meta
          title={`Blog | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <PageHeader
          title="Hear me out."
          emoji="📝"
          description="I write about life, business and philosophy."
        />

        <div className="mt-20">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </Main>
  );
}
