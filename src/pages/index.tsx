import SocialLinks from '@/components/shared/SocialLinks';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.headline}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-200">
          {AppConfig.headline}
        </h1>
      </div>
      <div className="space-y-3 text-base font-normal">
        <p>
          <span role="img" aria-label="Hi">
            👋
          </span>{' '}
          I&apos;m Varun, a tech entrepreneur from India, Currently building{' '}
          <a
            href="https://featureos.app?utm_source=varunraj_in"
            target="_blank"
          >
            featureOS
          </a>{' '}
          a product manager swiss army knife.
        </p>

        <p>
          I code, speak and write for passion. Love books and music, huge fan of
          art. Love collecting souvenirs from every travel I make.
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
