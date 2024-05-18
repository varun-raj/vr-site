import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import PageHeader from '../components/shared/PageHeader';

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
      <PageHeader title="About Me" emoji="💡" />
      {/* <h2 className="text-xl">{AppConfig.description}</h2> */}
    </div>
    <div className="space-y-3 text-base font-normal">
      <p>
        I&apos;m a technology entrepreneur from India 🇮🇳, running{' '}
        <a href="https://skcript.com" target="_blank">
          Skcript
        </a>{' '}
        - a ten year old software technology company, building products that
        makes product owners life easier to build and manage their products.
      </p>
      <p>
        Been into the industry for more than 10 years now, and the world of web
        technology kept me fasicnated, built most of my projects with Javascript
        and Typescript eco-system.
      </p>
      <p>
        I love traveling and exploring new places, mainly the trips that
        involves adventure and nature. More into books and music. I love
        collecting souvenirs from every travel I make. I&apos;ve a thing for
        really{' '}
        <Link href="/blog/why-we-should-care-about-good-design">
          good design.
        </Link>
      </p>
    </div>
    <div className="mt-10">
      <h3 className="font-bold text-primary">Currently Working on</h3>
      <ul className="mt-3 flex flex-col space-y-4">
        <li>
          <h4 className="text-base font-normal">
            <a href="https://featureos.app" className="plain" target="_blank">
              featureOS.app
            </a>
          </h4>
          <p className="text-sm font-normal">
            A feature management tool for product owners to manage their product
          </p>
        </li>
        <li>
          <h4 className="text-base font-normal">
            <a href="https://guidekit.app" className="plain" target="_blank">
              guidekit.app
            </a>
          </h4>
          <p className="text-sm font-normal">
            Helps product users create quick help workflows
          </p>
        </li>
      </ul>
    </div>
  </Main>
);

export default About;
