import { CiLogin } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
export default function NavTop() {
  return (
    <div className="w-full grid grid-cols-12">
        {/* search */}
        <div className="xl:col-span-9 flex items-center gap-x-6">
          <span className="text-2xl text-[#CB1B1B] font-bold">ایـــرانی  فرش</span>
          <input type="search" className="w-[439px] max-w-[439px] p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED]" placeholder="جستجو  فرش" />
        </div>
        {/* buttons */}
        <div className="xl:col-span-3 flex items-center gap-x-4 justify-end">
            <button className="border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5 flex justify-center items-center text-center cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white"><SlBasket size='1.4rem' /></button>
            <button className="px-5 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] flex justify-center items-center text-center gap-2 cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white"><CiLogin size='1.4rem' /> ورود / ثبت نام </button>
        </div>
    </div>
  )
}
