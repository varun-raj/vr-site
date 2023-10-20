/* eslint-disable @typescript-eslint/naming-convention */
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useMemo } from 'react';

import talksData from '@/data/talks.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type ITalk = (typeof talksData)[0];

const TalkItem = ({ talk }: { talk: ITalk }) => {
  const { title } = talk;
  const youtubeIDFromURL = useMemo(() => {
    const url = new URL(talk.url);
    return url.searchParams.get('v') || url.pathname.split('/')[1];
  }, [talk.url]);

  const youtubeCoverImage = useMemo(() => {
    return `https://img.youtube.com/vi/${youtubeIDFromURL}/mqdefault.jpg`;
  }, [youtubeIDFromURL]);

  return (
    <div className="flex  flex-col justify-start gap-3 space-y-3">
      <div className="w-full rounded-lg">
        <div
          className="h-auto w-full rounded-lg bg-cover bg-center bg-no-repeat drop-shadow-lg "
          style={{
            backgroundImage: `url(${youtubeCoverImage})`,
          }}
        />
      </div>

      <Link href={talk.url} target="_blank" className="plain">
        <h3 className="text-lg font-normal dark:text-white">{title}</h3>
        <p className="font-mono text-sm">
          {format(new Date(talk.publishTime), 'MMMM dd, yyyy')}
        </p>
      </Link>
    </div>
  );
};

interface ITalksPageProps {
  talks: ITalk[];
}

export default function TalksPage({ talks }: ITalksPageProps) {
  return (
    <Main
      meta={
        <Meta
          title={`Talks | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            🎤
          </span>{' '}
          Talks I gave
        </h1>
        <h2 className="text-xl font-normal">
          I gave talks on various topics, from React to Blockchain
        </h2>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {talks.map((talk) => (
            <TalkItem key={talk.title} talk={talk} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      talks: talksData,
    },
  };
};
