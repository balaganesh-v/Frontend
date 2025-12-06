// frontend_service/src/pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>yuhnie!!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;



// MyApp({
//   Component: The page to show,
//   pageProps: Data for that page
// })
