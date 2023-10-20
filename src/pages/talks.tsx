/* eslint-disable @typescript-eslint/naming-convention */
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useMemo } from 'react';

import talksData from '@/data/talks.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import PageHeader from '../components/shared/PageHeader';

type ITalk = (typeof talksData)[0];

const TalkItem = ({ talk }: { talk: ITalk }) => {
  const { title, publishTime, url } = talk;

  const youtubeIDFromURL = useMemo(() => {
    const youtubeURL = new URL(url);
    return (
      youtubeURL.searchParams.get('v') || youtubeURL.pathname.split('/')[1]
    );
  }, [talk.url]);

  const youtubeCoverImage = useMemo(() => {
    return `https://img.youtube.com/vi/${youtubeIDFromURL}/mqdefault.jpg`;
  }, [youtubeIDFromURL]);

  return (
    <div className="group flex flex-col justify-start gap-3 space-y-3">
      <div className="h-[150px] w-full rounded-lg">
        <div
          className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat drop-shadow-lg"
          style={{
            backgroundImage: `url(${youtubeCoverImage})`,
          }}
        />
      </div>

      <Link href={url} target="_blank" className="plain">
        <h3 className="text-lg font-normal group-hover:text-primary dark:text-white">
          {title}
        </h3>
        <p className="font-mono text-xs">
          {format(new Date(publishTime), 'MMMM dd, yyyy')}
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
        <PageHeader
          title="Talks I gave"
          emoji="🎤"
          description="I gave talks on various topics, from React to Blockchain"
        />

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
