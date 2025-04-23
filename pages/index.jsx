import Advertisement from '@/Components/Advertisement/Advertisement';
import Model from '@/Components/Carpet3d/Model';
import Frame from '@/Components/Frame/Frame';
import Frame2 from '@/Components/Frame/Frame2';
import Motto from '@/Components/Motto/Motto';
import Slider1 from '@/Components/Slider/Slider1';
import Slider2 from '@/Components/Slider/Slider2';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.addEventListener('focus', () => {
      document.title = 'سامان توفیقیان';
    });
    window.addEventListener('blur', () => {
      document.title = 'برگرد به سایت عزیزم 😘';
    });
  }, []);
  return (
    <main className='w-[100vw] overflow-x-hidden'>
      <Motto />
      <Frame />
      <Slider1 />
      <Frame2 />
      <Slider2 />
      <Model />
      <Advertisement />
    </main>
  );
}

export default Home;
