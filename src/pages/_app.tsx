import 'styles/globals.css'; // probably do not need it because have styled components's GlobalStyles
import type { AppProps } from 'next/app';

// import Layout from 'components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // <Layout>
  <Component {...pageProps} />
  // </Layout>
);

export default MyApp;
