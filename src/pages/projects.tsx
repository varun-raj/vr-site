/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import clsx from 'clsx';
import React from 'react';

import PageHeader from '../components/shared/PageHeader';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

const projects = [
  {
    title: `What's the worth?`,
    description:
      'A small web app that tells you how much your purchase is worth in terms of your time.',
    image: '',
    link: 'https://whatstheworth.varunraj.in/',
    sourceCode: '',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    className: 'col-span-1',
  },
  {
    title: `Nila`,
    description: 'A telegram bot powered by cloudflare worker AI',
    image: '',
    link: 'https://github.com/varun-raj/nila',
    sourceCode: 'https://github.com/varun-raj/nila',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    className: 'col-span-2',
  },
  {
    title: `featureOS`,
    description: 'A feedback management system for product teams',
    image: '',
    link: 'https://featureos.app',
    sourceCode: '',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    className: 'col-span-3',
  },
  {
    title: `alphaOS`,
    description: `A suite of tools for product teams to manage product's lifecycle post go live`,
    image: '',
    link: 'https://alphaos.app',
    sourceCode: '',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    className: 'col-span-3',
  },
];
export default function ProjectsPage() {
  return (
    <Main meta={<Meta title="Projects" description="Hobby Projects" />}>
      <PageHeader
        title="Projects"
        emoji="📝"
        description="Everything fun and interesting I've built."
      />

      <div className="pb-8 pt-16">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={clsx(
                'flex flex-col rounded-xl border border-zinc-800 p-3 dark:border-zinc-800 dark:bg-zinc-800',
                project.className
              )}
            >
              <h2 className="mb-1 text-xl font-bold text-gray-900 group-hover:text-primary dark:text-gray-200 dark:group-hover:text-primary">
                {project.title}
              </h2>
              <p className="text-sm font-normal text-gray-500">
                {project.description}
              </p>
              {!!project.tags.length && (
                <div className="mt-2 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mb-2 mr-2 rounded-full bg-gray-200 px-2 text-xxs  text-gray-700 dark:bg-zinc-300/20 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
