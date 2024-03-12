/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import PageHeader from '../components/shared/PageHeader';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

const projects = [
  {
    title: `featureOS`,
    description: 'A feedback management system for product teams',
    image: '',
    link: 'https://featureos.app',
    logo: '/assets/images/featureos-logo.png',
    sourceCode: '',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    className: 'col-span-3',
  },
  {
    title: `Semgrow`,
    description:
      'A brand new SEO Tool in the market for indie hackers and small businesses',
    image: '',
    link: 'https://semgrow.app/',
    logo: '/assets/images/semgrow-logo.svg',
    tags: ['Cloudflare Workers', 'Next.js', 'Tailwind CSS', 'Hono'],
    className: 'col-span-1 sm:col-span-1',
  },

  {
    title: `What's the worth?`,
    description:
      'A small web app that tells you how much your purchase is worth in terms of your time.',
    image: '',
    logo: '/assets/images/whatstheworth-logo.png',
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
    logo: '/assets/images/nila-logo.svg',
    tags: ['Cloudflare Workers', 'Telegram Bot', 'AI', 'StableDiffusion'],
    className: 'col-span-1',
  },
  {
    title: `Linear to Discord`,
    description:
      'Open source middlware service to push notifcations from linear to discord',
    image: '',
    link: 'https://github.com/varun-raj/linear-to-discord',
    sourceCode: 'https://github.com/varun-raj/linear-to-discord',
    tags: ['NextJS'],
    className: 'col-span-1',
  },
  {
    title: `Ullam - AI therapist`,
    description:
      'A personal AI therapist that helps you to keep track of your mental health.',
    logo: 'https://ullam.varunraj.in/logo.png',
    link: 'https://ullam.varunraj.in',
    sourceCode: '',
    tags: ['Gemini', 'GenerativeAI', 'React'],
    className: 'col-span-2',
  },
  {
    title: `AI Changelog Generator`,
    description:
      'Convert your simple release notes to a beautiful changelog with AI.',
    logo: '/ai-writer.svg',
    link: 'https://featureos.app/tools/changelog-generator',
    sourceCode: '',
    tags: ['Gemini', 'GenerativeAI', 'React'],
    className: 'col-span-2',
  },
  {
    title: `AI Resume Analyser`,
    description:
      'Evaluvate fitness of your resume for a job description using AI.',
    logo: '/genai-tools.png',
    link: 'https://genai-tools.skcript.com/',
    sourceCode: '',
    tags: ['Gemini', 'GenerativeAI', 'React'],
    className: 'col-span-1',
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              target="_blank"
              className={clsx(
                'plain flex flex-col rounded-xl border border-zinc-300 bg-white p-4 !no-underline shadow dark:border-zinc-800 dark:bg-zinc-800',
                project.className,
                // Zoom in on hover
                'transform transition-transform duration-300 ease-in-out hover:scale-105'
              )}
            >
              <div className="flex flex-col  gap-2 !no-underline">
                {project.logo && (
                  <Image
                    src={project.logo}
                    width={20}
                    height={20}
                    alt={`${project.title} Logo`}
                  />
                )}
                <h2 className="mb-1 text-xl font-bold text-gray-700 group-hover:text-primary dark:text-gray-200 dark:group-hover:text-primary">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm font-normal text-gray-500">
                {project.description}
              </p>
              {!!project.tags.length && (
                <div className="mt-2 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mb-2 mr-2 rounded-full border bg-zinc-100 px-2 text-xxs leading-5  text-gray-700 dark:bg-zinc-300/20 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Main>
  );
}
