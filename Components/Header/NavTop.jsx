import { CiLogin } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
export default function NavTop() {
  return (
    <div className="w-full grid grid-cols-12">
        {/* buttons */}
        <div className="xl:col-span-3 flex items-center gap-x-4">
            <button className="border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5 flex justify-center items-center text-center cursor-pointer"><SlBasket size='1.4rem' /></button>
            <button className="px-5 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] flex justify-center items-center text-center gap-2 cursor-pointer"><CiLogin size='1.4rem' /> ورود / ثبت نام </button>
        </div>
    </div>
  )
}
