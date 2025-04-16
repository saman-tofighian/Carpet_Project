import { useState } from 'react';
import NavBottom from './NavBottom';
import NavMobile from './NavMobile';
import NavTop from './NavTop';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <header className='w-full py-[25px] px-[6%]'>
        <nav className='w-full grid grid-cols-12 border-b'>
          {/* top */}
          <section className='col-span-12 grid gap-y-5 xl:gap-y-0'>
            <NavTop openMobileOpen={() => setIsMobileOpen(true)} />
            <NavBottom />
          </section>
        </nav>
      </header>
      <NavMobile isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </>
  );
}

export default Header;
