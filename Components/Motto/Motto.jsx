import MottoLeft from './MottoLeft';
import MottoRight from './MottoRight';

export default function Motto() {
  return (
    <section className='mt-16 lg:mt-24 w-full'>
      <div className='items-center lg:gap-x-12 xl:gap-x-0 grid grid-cols-12 px-[6%] w-full'>
        <MottoRight />
        <MottoLeft />
      </div>
    </section>
  );
}
