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

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

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
    <Main meta={<Meta title={post.title} description={post.title} />}>
      {/* Back button code */}
      <div className="flex justify-between">
        <Link href="/blog" className="text-xs">
          <>⬅️ Back</>
        </Link>
      </div>

      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <Link href={`/blog/${post.slug}`} className="text-xs">
        <time
          dateTime={post.date}
          className="mt-2 block font-mono text-xs dark:text-gray-300"
        >
          ⏰ {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </Link>
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
