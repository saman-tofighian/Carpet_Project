import Image from '@/Components/Product/Image';
import About from './About';

export default function Product({ productParent }) {
  return (
    <section className='w-full grid grid-cols-12 gap-y-14 xl:gap-y-0'>
      <Image productImage={productParent} />
      <About productAbout={productParent} />
    </section>
  );
}
