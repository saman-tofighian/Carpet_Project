import Link from 'next/link';

export default function NavBottom() {
  return (
    <div className='w-full grid grid-cols-12 py-2.5'>
      <div className='col-span-12 hidden lg:block'>
        <ul className='flex items-center gap-x-8 my-5'>
          <li>
            <Link href='/' className='font-medium text-[16px] text-[#CB1B1B]'>
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href='/' className='font-medium text-[16px] text-[#121212] '>
              وبلاگ
            </Link>
          </li>
          <li>
            <Link href='/' className='font-medium text-[16px] text-[#121212]'>
              تماس با ما
            </Link>
          </li>
          <li>
            <Link href='/' className='font-medium text-[16px] text-[#121212] '>
              درباره ما
            </Link>
          </li>
        </ul>
      </div>
      <div className='col-span-12 block lg:hidden md:place-items-center'>
        <input
          type='search'
          className='w-[439px] md:w-[500px] p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED] flex lg:hidden'
          placeholder='جستجو  فرش'
        />
      </div>
    </div>
  );
}
