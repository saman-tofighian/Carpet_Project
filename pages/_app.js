import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { CartProvider } from '@/context/CartContext ';
import '@/styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideHeaderFooter = router.pathname === '/404';

  return (
    <CartProvider>
      <Head>
        <title>فروشگاه فرش سامان توفیقیان | خرید آنلاین فرش ایرانی</title>
        <meta
          name='description'
          content='فروشگاه آنلاین فرش ایرانی فرش ؛ عرضه‌کننده‌ی بهترین فرش‌های دستباف، ماشینی و سنتی با ارسال رایگان و تضمین کیفیت.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta property='og:title' content='فروشگاه فرش ایرانی فرش' />
        <meta
          property='og:description'
          content='با فرش ایرانی فرش، زیبایی ایرانی را به خانه بیاورید. صدها مدل فرش سنتی و مدرن فقط با یک کلیک.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://carpet-project.vercel.app/' />
        <meta
          property='og:image'
          content='https://yourwebsite.com/images/banner.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!hideHeaderFooter && <Header />}
      <Component {...pageProps} />
      {!hideHeaderFooter && <Footer />}
    </CartProvider>
  );
}
