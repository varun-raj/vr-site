import { ArrowRight } from '@phosphor-icons/react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const About = () => (
  <Main
    meta={
      <Meta
        title={`About me | ${AppConfig.title}`}
        description={AppConfig.description}
      />
    }
  >
    <div className="pb-8 pt-16">
      <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
        💡 About Me
      </h1>
      {/* <h2 className="text-xl">{AppConfig.description}</h2> */}
    </div>
    <div className="space-y-3 text-base font-normal">
      <p>
        I&apos;m a software developer from India, running Skcript - a software
        technology company, we are building a suit of tools for product owners
        to build better products and manage them.
      </p>
      <p>
        Been into the software industry for more than 10 years now, and the
        world of web technology kept me fasicnated, built most of my projects
        with Javascript and Typescript echo system.
      </p>
      <p>
        I love traveling and exploring new places, mainly the trips that
        involves adventure and nature. More into books and music. I love
        collecting souvenirs from every travel I make. I&apos;ve a thing for
        really good design.
      </p>
      <p>
        <a href="https://twitter.com/zathvarun" target="_blank">
          <span className="flex items-center gap-2">
            Talk to me! <ArrowRight />
          </span>
        </a>
      </p>
    </div>
  </Main>
);

export default About;
