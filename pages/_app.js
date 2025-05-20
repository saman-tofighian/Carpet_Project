import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Loading from '@/Components/Loading/Loading';
import { CartProvider } from '@/context/CartContext ';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideHeaderFooter = router.pathname === '/404';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  // optional: loading on route change too
  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router]);

  return (
    <CartProvider>
      {isLoading && <Loading />}
      {!hideHeaderFooter && <Header />}
      <Component {...pageProps} />
      {!hideHeaderFooter && <Footer />}
    </CartProvider>
  );
}
