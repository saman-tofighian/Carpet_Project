import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
