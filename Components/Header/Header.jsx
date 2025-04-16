import { useState } from 'react';
import NavBottom from './NavBottom';
import NavMobile from './NavMobile';
import NavTop from './NavTop';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <header className='w-full py-[25px] px-[6%]'>
        <nav className='w-full grid grid-cols-12 mt-2.5'>
          {/* top */}
          <section className='col-span-12 grid gap-y-4 lg:gap-y-3 xl:gap-y-2'>
            <NavTop openMobileOpen={() => setIsMobileOpen(true)} />
            <NavBottom />
            <hr />
          </section>
        </nav>
      </header>
      <NavMobile isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </>
  );
}

export default Header;
