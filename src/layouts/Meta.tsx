import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const OG_IMAGE_MAP = {
  '/': '/assets/og-images/home.png',
  '/blog': '/assets/og-images/blog.png',
  '/blog/[slug]': '/assets/og-images/blog.png',
  '/about': '/assets/og-images/about.png',
  '/press-kit': '/assets/og-images/press-kit.png',
};
const Meta = (props: IMetaProps) => {
  const router = useRouter();
  const ogImage =
    OG_IMAGE_MAP[router.pathname as keyof typeof OG_IMAGE_MAP] ||
    `/og-meta.png`;
  console.log(router.pathname, ogImage);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: `${props.title} | ${AppConfig.description}`,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: `${AppConfig.url}${ogImage}`,
              alt: AppConfig.title,
              height: 2034,
              width: 1068,
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@zathvarun',
          site: '@zathvarun',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export { Meta };
