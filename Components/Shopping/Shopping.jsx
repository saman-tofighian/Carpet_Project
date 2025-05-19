import About from './About';
import Image from './Image';

export default function ShoppingCart({ ShoppingImage, ShoppingAbout }) {
  return (
    <div className='grid grid-cols-12 gap-y-10 xl:gap-y-0'>
      <Image ShoppingImage={ShoppingImage} />
      <About ShoppingAbout={ShoppingAbout} />
    </div>
  );
}
