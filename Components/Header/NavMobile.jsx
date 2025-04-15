import Link from 'next/link';
import { MdOutlineClose } from 'react-icons/md';
export default function NavMobile() {
  return (
    <section className='w-[100vw] h-[100vh] fixed top-0 right-0 z-50 bg-[#000000b0] block xl:hidden'>
      <div className='w-full flex justify-center items-start h-[100%] flex-wrap'>
        <div className='w-full mt-6 px-[6%]'>
          <button className='rounded-[8px] text-[#CB1B1B] p-3.5 bg-[#EDEDED] flex xl:hidden justify-center items-center text-center cursor-pointer order-1 font-extrabold'>
            <MdOutlineClose size='2rem' />
          </button>
        </div>
        <ul className='flex items-center my-5 flex-wrap justify-center gap-y-10 text-center'>
          <li className='w-full'>
            <Link href='/' className='font-medium text-[20px] text-[#CB1B1B]'>
              صفحه اصلی
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/' className='font-medium text-[20px] text-white '>
              وبلاگ
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/' className='font-medium text-[20px] text-white'>
              تماس با ما
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/' className='font-medium text-[20px] text-white '>
              درباره ما
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
