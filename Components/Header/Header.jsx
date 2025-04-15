import NavBottom from './NavBottom';
import NavMobile from './NavMobile';
import NavTop from './NavTop';

function Header() {
  return (
    <>
      <header className='w-full py-[25px] px-[6%]'>
        <nav className='w-full grid grid-cols-12 border-b'>
          {/* top */}
          <section className='col-span-12 grid gap-y-5 xl:gap-y-0'>
            <NavTop />
            <NavBottom />
          </section>
        </nav>
      </header>
      <NavMobile />
    </>
  );
}

export default Header;
