import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
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

      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>

      <div className="mt-3 flex items-center justify-between space-x-2">
        <Link href={`/blog/${post.slug}`} className="plain">
          <time
            dateTime={post.date}
            className="block font-mono text-xs dark:text-gray-300"
          >
            ⏰ {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </Link>
        <p className="text-xs">{post.readingTime.text}</p>
      </div>

      <Image
        src={post.cover}
        alt={post.title}
        width={800}
        height={400}
        className="mt-4 rounded-lg"
      />
      <article className="prose">
        <Component />
      </article>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: allPosts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPropType, IBlogUrl> = async ({
  params,
}) => {
  const post = allPosts.find((p) => p.slug === params!.slug);
  return {
    props: {
      post,
    },
  };
};

export default Blog;
