import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="w-full bg-[#F9F9F9] mt-32">
        <section className="w-full px-[4%] py-7 grid grid-cols-12 gap-x-16">
            <div className="col-span-5">
                <h3 className="text-[#CB1B1B] font-bold text-2xl">ایـــرانی  فرش</h3>
                <p className="text-[16px] font-medium mt-5 leading-9">
                با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع و با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از فروش حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش یک خرید آسان و لذت بخش را تجربه کنید.
                </p>
            </div>
            <div className="col-span-2">
                <ul className="w-full text-[#505050] text-[16px] flex flex-col">
                    <h6 className="font-bold">فرش های  دست بافت</h6>
                    <span className="texy-[#717171] mt-7 font-medium">لوکس</span>
                    <span className="texy-[#717171] mt-5 font-medium">قدیمی</span>
                    <span className="texy-[#717171] mt-5 font-medium">مدرن</span>
                </ul>
            </div>
            <div className="col-span-2">
                <ul className="w-full text-[#505050] text-[16px] flex flex-col">
                    <h6 className="font-bold">فرش های ماشینی</h6>
                    <span className="texy-[#717171] mt-7 font-medium">لوکس</span>
                    <span className="texy-[#717171] mt-5 font-medium">قدیمی</span>
                    <span className="texy-[#717171] mt-5 font-medium">مدرن</span>
                </ul>
            </div>
            <div className="col-span-2">
                <ul className="w-full text-[#505050] text-[16px] flex flex-col">
                    <h6 className="font-bold">سایر فرش ها</h6>
                    <span className="texy-[#717171] mt-7 font-medium">لوکس</span>
                    <span className="texy-[#717171] mt-5 font-medium">قدیمی</span>
                    <span className="texy-[#717171] mt-5 font-medium">مدرن</span>
                </ul>
            </div>
            <div className="col-span-4 mt-8">
                <div className="w-full flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-medium text-[20px] text-[#505050]">تلفن پشتیبانی :  0212544</span>
                        <div className="flex gap-x-6 mt-7">
                            <Link href='https://www.linkedin.com/in/saman-tofighian/' target="_blank" className="text-blue-500">
                                <FaLinkedin size='2rem' />
                            </Link>
                            <Link href='https://github.com/saman-tofighian' target="_blank" className="text-black">
                                <FaGithub size='2rem'  />
                            </Link>
                        </div>
                    </div>
                    <figure>
                        <img src="./en.png" alt="enamad" />
                    </figure>
                </div>
            </div>
        </section>
    </footer>
  )
}
