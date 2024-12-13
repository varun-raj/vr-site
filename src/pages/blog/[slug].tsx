import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArticleJsonLd } from 'next-seo';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { AppConfig } from '../../utils/AppConfig';

type IBlogUrl = {
  slug: string;
};

type IPropType = {
  post: Post | undefined;
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { post } = props;
  const Component = useMDXComponent(post?.body.code || '');

  if (!post) return <div>404</div>;

  return (
    <Main
      meta={
        <Meta
          title={`${post.title} | ${AppConfig.site_name}`}
          description={post.description}
        />
      }
    >
      <ArticleJsonLd
        authorName={AppConfig.author}
        datePublished={post.date}
        description={post.description}
        title={post.title}
        publisherName={AppConfig.author}
        url={`${AppConfig.url}/blog/${post.slug}`}
        images={[post.cover]}
      />
      <div className="flex justify-between">
        <Link href="/blog" className="plain text-xs">
          <>⬅️ Back</>
        </Link>
      </div>

      <h1 className="my-2 text-4xl font-bold text-gray-900 dark:text-gray-200">
        {post.title}
      </h1>

      <div className="mb-10 mt-3 flex items-center justify-between space-x-2">
        <Link href={`/blog/${post.slug}`} className="plain">
          <time
            dateTime={post.date}
            className="block font-mono text-xs dark:text-gray-200"
          >
            ⏰ {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </Link>
        <p className="text-xs">{post.readingTime.text}</p>
      </div>

      <article className="prose w-full dark:prose-invert dark:text-gray-400">
        <Component />
      </article>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: allPosts
      .filter((p) => !p.draft)
      .map((p) => ({
        params: { slug: p.slug },
      })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPropType, IBlogUrl> = async ({
  params,
}) => {
  const post = allPosts
    .filter((p) => !p.draft)
    .find((p) => p.slug === params!.slug);
  return {
    props: {
      post,
    },
  };
};

export default Blog;
