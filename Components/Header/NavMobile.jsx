import { NavLinks } from '@/Data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { MdOutlineClose } from 'react-icons/md';
function NavMobile({ isOpen, setIsOpen }) {
  const pathName = usePathname();
  return (
    <section
      className={`fixed top-0 right-0 w-full h-full z-50 lg:hidden transition-all duration-1000 ease-linear ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-linear ${
          isOpen ? 'opacity-70' : 'opacity-0'
        }`}
      ></div>

      <div
        className={`absolute top-0 right-0 w-[65%] sm:w-[60%] h-full bg-white transition-transform duration-1000 ease-linear ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className='mt-8 mb-6 px-[6%] w-full'>
          <button
            className='flex justify-center items-center bg-[#EDEDED] p-2.5 rounded-[8px] font-extrabold text-[#CB1B1B] cursor-pointer'
            onClick={() => setIsOpen(false)}
            title='closeHamgurgerMenu'
          >
            <MdOutlineClose size='1.8rem' />
          </button>
        </div>

        <ul className='flex flex-col items-center gap-y-10 my-10 text-center'>
          {NavLinks.map((val) => (
            <li className='w-full' key={val.id}>
              <Link
                href={val.href}
                className={`font-medium text-[20px] ${
                  pathName === val.href ? 'text-[#CB1B1B]' : 'text-[#121212]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default memo(NavMobile);
