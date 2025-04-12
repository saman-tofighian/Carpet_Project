import MottoLeft from './MottoLeft';
import MottoRight from './MottoRight';

export default function Motto() {
  return (
    <section className='w-full mt-24'>
      <div className='w-full px-[6%] grid grid-cols-12 lg:gap-x-12 xl:gap-x-0 items-center'>
        <MottoRight />
        <MottoLeft />
      </div>
    </section>
  );
}
