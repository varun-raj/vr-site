import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import tools from '@/data/tools.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import { groupToArray } from '../utils/libs';

type IToolITem = (typeof tools)[0];

const ToolItem = ({ tool }: { tool: IToolITem }) => {
  return (
    <div className="flex flex-col justify-start space-y-2 rounded-lg">
      <div className="flex items-center space-x-2">
        {tool.icon && (
          <Image
            src={tool.icon}
            width={75}
            height={75}
            alt={tool.name}
            className="max-h-[15px] max-w-[15px]"
          />
        )}
        <Link href={tool.url} className="plain hover-arrow">
          <h3 className="text-base font-normal dark:text-gray-100">
            {tool.name}
          </h3>
        </Link>
      </div>
      <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
        {tool.description}
      </p>
    </div>
  );
};

export default function ToolsPage() {
  const groupedTools = useMemo(() => {
    return groupToArray(tools, 'category');
  }, [tools]);

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

        <div className="mt-10 flex flex-col space-y-10">
          {groupedTools.map((group) => (
            <div key={group.label}>
              <div>
                <h2 className="mb-5 py-3 font-mono font-bold text-orange-500 dark:text-orange-200">
                  {group.label}
                </h2>
              </div>
              <div className="flex flex-col space-y-4 pl-5">
                {group.items.map((tool) => (
                  <ToolItem key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
