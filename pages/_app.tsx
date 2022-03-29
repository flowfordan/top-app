import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
    <Head>
      <title>Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Component {...pageProps} />
    
  </>) ;
}

export default MyApp;
