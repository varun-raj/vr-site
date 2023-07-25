import React from 'react';

import PKBiography from '../components/pressKit/PKBiography';
import PKPhotos from '../components/pressKit/PKPhotos';
import PKSocialLinks from '../components/pressKit/PKSocialLinks';
import Title from '../components/ui/Title';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

export default function PressKitPage() {
  return (
    <Main
      meta={
        <Meta
          title={`Press Kit | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="">
        <div className="mb-10">
          <Title title="Press Kit" level={1} className="text-5xl" />
          <p className="">
            Please use the following assets when writing about me or my work.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          <section className="flex flex-col gap-3">
            <PKPhotos />
          </section>
          <section className="flex flex-col gap-3">
            <PKSocialLinks />
          </section>
          <section className="flex flex-col gap-3">
            <PKBiography />
          </section>
        </div>
      </div>
    </Main>
  );
}
