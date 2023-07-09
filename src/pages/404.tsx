import React from 'react';

import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

export default function FourNotFour() {
  return (
    <Main
      meta={
        <Meta
          title={`Page Not Found | ${AppConfig.site_name}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-bold text-gray-600 dark:text-gray-300">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
      </div>
    </Main>
  );
}
