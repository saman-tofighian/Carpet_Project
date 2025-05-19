import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { CartProvider } from '../context/CartContext ';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideHeaderFooter = router.pathname === '/404';

  return (
    <CartProvider>
      {!hideHeaderFooter && <Header />}
      <Component {...pageProps} />
      {!hideHeaderFooter && <Footer />}
    </CartProvider>
  );
}
