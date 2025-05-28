import Advertisement from '@/Components/Advertisement/Advertisement';
import Model from '@/Components/Carpet3d/Model';
import Frame from '@/Components/Frame/Frame';
import Frame2 from '@/Components/Frame/Frame2';
import Motto from '@/Components/Motto/Motto';
import Slider1 from '@/Components/Slider/Slider1';
import Slider2 from '@/Components/Slider/Slider2';
import Head from 'next/head';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.addEventListener('focus', () => {
      document.title = 'سامان توفیقیان';
    });
    window.addEventListener('blur', () => {
      document.title = 'دوباره به دنیای هنر پارسی بیا 🌟';
    });
  }, []);
  return (
    <>
      <Head>
        <title>ایرانی فرش: فرش‌های دستبافت با نمایش سه‌بعدی</title>
        <meta
          name='description'
          content='فرش‌های ایرانی دستبافت را با فناوری 3D کاوش کنید. زیبایی هنر پارسی را کشف کنید و شاهکار دلخواه خود را بخرید. اکنون ببینید!'
        />
        <meta
          name='keywords'
          content='فرش ایرانی, فرش دستبافت, فرش سه‌بعدی, ایرانی فرش, Persian rug, 3D carpet'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='ایرانی فرش: فرش‌های دستبافت با نمایش سه‌بعدی'
        />
        <meta
          property='og:description'
          content='فرش‌های ایرانی دستبافت را با فناوری 3D کاوش کنید. زیبایی هنر پارسی را کشف کنید و شاهکار دلخواه خود را بخرید. اکنون ببینید!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://yourwebsite.com' />
        <meta property='og:image' content='/motto.webp' />
      </Head>
      <main className='w-[100vw] overflow-x-hidden'>
        <Motto />
        <Frame />
        <Slider1 />
        <Frame2 />
        <Slider2 />
        <Model />
        <Advertisement />
      </main>
    </>
  );
}

export default Home;
