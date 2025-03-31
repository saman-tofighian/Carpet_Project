import Link from "next/link";

export default function NavBottom() {
  return (
    <div className="w-full grid grid-cols-12 py-2.5">
        <div className='col-span-12'>
            <ul className="flex items-center gap-x-8 my-5">
                <li>
                    <Link href='/' className="font-medium text-[16px] text-[#CB1B1B]">صفحه اصلی</Link>
                </li>
                <li>
                    <Link href='/' className="font-medium text-[16px] text-[#121212] ">وبلاگ</Link>
                </li>
                <li>
                    <Link href='/' className="font-medium text-[16px] text-[#121212]">تماس با ما</Link>
                </li>
                <li>
                    <Link href='/' className="font-medium text-[16px] text-[#121212] ">درباره ما</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
