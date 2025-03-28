import NavTop from "./NavTop";

function Header() {
    return ( 
        <header className="w-full border-b py-[24px] px-[4%]">
            <nav className="w-full grid grid-cols-12">
                {/* top */}
                <section className="col-span-12">
                    <NavTop />
                </section>
            </nav>
        </header>
     );
}

export default Header;