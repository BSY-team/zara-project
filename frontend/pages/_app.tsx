

import type { AppProps } from 'next/app'
import Layout from './components/Layout'
// import "../styles/Layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { useRouter } from 'next/router';
import AllProducts from './AllProducts';
import Men from './men';
import Women from './women';  

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <Layout>
      {router.pathname === '/AllProducts' ? (
        <AllProducts />
      ) : router.pathname === '/men' ? (
        <Men />
      ) : router.pathname === '/women' ? (
        <Women />
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}
