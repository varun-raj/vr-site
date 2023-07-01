import Image from 'next/image';
import React from 'react';

import tools from '@/data/tools.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type IToolITem = (typeof tools)[0];

const ToolItem = ({ tool }: { tool: IToolITem }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-3 rounded-lg shadow-sm ring-1 ring-gray-200 backdrop-blur dark:ring-white/20">
      <div className="flex w-full justify-center rounded-t-lg bg-gray-100  py-6 dark:bg-zinc-800">
        <Image
          src={tool.icon}
          width={75}
          height={75}
          alt={tool.name}
          className="max-h-[75px] max-w-[75px]"
        />
      </div>
      <div className="p-3">
        <h3 className="text-base font-normal dark:text-gray-100">
          {tool.name}
        </h3>
        <p className="text-xs font-normal">{tool.description}</p>
      </div>
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
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            ⚒️
          </span>{' '}
          Tools I use
        </h1>
        <h2 className="text-xl  font-normal">
          A list of tools I use to get things done.
        </h2>

        <div className="mt-3 grid grid-cols-3 gap-2 lg:gap-5">
          {tools.map((tool) => (
            <ToolItem key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </Main>
  );
}
