import '@fortawesome/fontawesome-svg-core/styles.css';

import { AuthContextProvider } from '../context/auth-context';
import Layout from '../components/Layout/Layout';
import classes from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
