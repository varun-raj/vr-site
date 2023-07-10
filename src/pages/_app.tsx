import '../styles/global.css';

import type { AppProps } from 'next/app';

import Analytics from '../components/shared/Analytics';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
