import Link from "next/link";

export default function Advertisement() {
  return (
    <section className="w-full mt-28 mb-10">
        <div className="w-full grid grid-cols-12 px-[6%] items-center">
            <div className="col-span-6 text-center px-[15%]">
                <h2 className="text-[#000000] font-medium text-[2.7rem]">عضویت در باشگاه مشتریان</h2>
                <h2 className="text-[#CB1B1B] font-medium text-[2.7rem]"> ایـــرانی فرش</h2>
                <p className="text-[#121212] font-medium text-[1.3rem] mt-8 leading-11 text-wrap">با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و از امکان تحویل رایگان فرش های خود بهره مند شوید.</p>
                <div className="w-full flex justify-center mt-8">
                    <Link href='/' className="text-[#CB1B1B] border border-[#CB1B1B] bg-transparent w-full px-4 py-3.5 rounded-[12px] font-bold text-[18px] ease-linear duration-700 hover:bg-[#cb1b1b] hover:text-white">
                    ایجاد عضویت 
                    </Link>
                </div>
            </div>
            <figure className="col-span-6 flex justify-center">
                <img src="./advertisement.png" alt="carpet" />
            </figure>
        </div>
    </section>
  )
}
