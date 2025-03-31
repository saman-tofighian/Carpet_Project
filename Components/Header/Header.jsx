import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

function Header() {
    return ( 
        <header className="w-full py-[24px] px-[4%]">
            <nav className="w-full grid grid-cols-12 border-b">
                {/* top */}
                <section className="col-span-12">
                    <NavTop />
                    <NavBottom />
                </section>
            </nav>
        </header>
     );
}

export default Header;