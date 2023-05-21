import Image from 'next/image';

import SocialLinks from '@/components/shared/SocialLinks';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div className="pb-8 pt-16">
        <Image
          src="/profile_picture.jpg"
          width={200}
          height={200}
          className="mb-3 h-16 w-16 rounded-full bg-zinc-100 object-cover ring-white dark:bg-zinc-800"
          alt="Profile Picture"
        />
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          {AppConfig.title}
        </h1>
        <h2 className="text-xl">{AppConfig.description}</h2>
      </div>
      <div className="space-y-3 text-base">
        <p>
          <span role="img" aria-label="Hi">
            👋
          </span>{' '}
          I&apos;m Varun, a web software developer from India, Currently
          building{' '}
          <a href="https://hellonext.co" target="_blank">
            Hellonext
          </a>{' '}
          a feedback management tool for SaaS tools.
        </p>

        <p>
          I code, speak and write for passion. Love books and music, huge fan of
          art. Love collecting souvenirs from every travel I make
        </p>

        <p>I&apos;ve a thing for really good design.</p>

        <p>
          <em>Love Nature, Spread Peace.</em>
        </p>
      </div>
      <SocialLinks />
    </Main>
  );
};

export default Index;
