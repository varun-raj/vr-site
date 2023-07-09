import type { ReactNode } from 'react';

import Header from '@/components/shared/Header';

import Footer from '../components/shared/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-3 text-gray-700 antialiased dark:text-gray-400 md:px-3">
    {props.meta}

    <div className="mx-auto flex h-screen max-w-screen-md flex-col justify-between">
      <Header />
      <main className="content mb-auto py-5 text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
