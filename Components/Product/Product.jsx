import Image from '@/Components/Product/Image';
import About from './About';

export default function Product() {
  return (
    <section className='w-full grid grid-cols-12'>
      <Image />
      <About />
    </section>
  );
}
