import type { ReactNode } from 'react';

import Header from '@/components/shared/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-3 text-gray-700 antialiased dark:text-gray-400 md:px-3">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="content py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
