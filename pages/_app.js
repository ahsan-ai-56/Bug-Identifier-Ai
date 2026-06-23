import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-new.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
