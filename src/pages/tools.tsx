import Image from 'next/image';
import React from 'react';

import tools from '@/data/tools.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type IToolITem = (typeof tools)[0];

const ToolItem = ({ tool }: { tool: IToolITem }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-3 rounded bg-gray-100 py-6 shadow-sm ring-1 ring-gray-200 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
      <Image
        src={tool.icon}
        width={50}
        height={50}
        alt={tool.name}
        className="max-h-[50px] max-w-[50px]"
      />
      <h3 className="text-xl">{tool.name}</h3>
      <span className="inline-flex items-center rounded-full bg-gray-200 px-2 text-xxs font-medium text-gray-800 dark:bg-zinc-700 dark:text-gray-400 dark:ring-white/10">
        {tool.category}
      </span>
    </div>
  );
};

export default function ToolsPage() {
  return (
    <Main
      meta={
        <Meta
          title={`Tools | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            ⚒️
          </span>{' '}
          Tools I use
        </h1>
        <h2 className="text-xl">A list of tools I use to get things done.</h2>

        <div className="mt-3 grid grid-cols-3 gap-2 lg:gap-4">
          {tools.map((tool) => (
            <ToolItem key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </Main>
  );
}
