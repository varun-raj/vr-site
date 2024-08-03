import type { ReactNode } from 'react';

import Header from '@/components/shared/Header';

import Footer from '../components/shared/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-3 text-gray-700 antialiased md:px-3 dark:text-gray-400">
    {props.meta}

    <div className="mx-auto flex h-screen max-w-screen-md flex-col justify-between">
      <Header />
      <main className="mb-auto py-5">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
