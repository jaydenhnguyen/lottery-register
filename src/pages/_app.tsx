import Head from 'next/head';
import 'src/styles/_app.scss';
import 'src/styles/_core.scss';
import 'src/styles/tailwind.scss';
import { AppProps } from 'next/app';
import { SelectedNumbersProvider } from '../context/selectedNumbers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WHE WHE</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text
          y=%22.9em%22 font-size=%2290%22></text></svg>"
        />
      </Head>

      <SelectedNumbersProvider>
        <Component {...pageProps} />
      </SelectedNumbersProvider>
    </>
  );
}
