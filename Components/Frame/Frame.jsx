import Link from "next/link";

export default function Frame() {
    return (
      <section className="w-full mt-40 pb-36">
        <div className="w-full px-[4%] flex items-center">
          <div className="w-[55%] flex items-center justify-center gap-x-9">
            <figure className="relative w-[65%] rounded-2xl bg-[url(/1f.png)] h-[318px] max-h-[318px] bg-cover flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl">
              <div className="w-full p-8 relative z-10">
                <figcaption className="text-white text-[20px] font-medium mb-5">فرش های جدید</figcaption>
                <Link href='/' className="py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]">
                  مشاهده و خرید فرش جدید
                </Link>
              </div>
            </figure>
  
            <figure className="relative w-[65%] rounded-2xl bg-[url(/2f.png)] h-[318px] max-h-[318px] bg-cover flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl">
              <div className="w-full p-8 relative z-10">
                <figcaption className="text-white text-[20px] font-medium mb-5">فرش های رنگارنگ</figcaption>
                <Link href='/' className="py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]">
                  مشاهده و خرید فرش رنگارنگ
                </Link>
              </div>
            </figure>
          </div>
  
          <div className="w-[45%] flex flex-wrap justify-center gap-y-9">
            <figure className="relative w-[65%] rounded-2xl bg-[url(/3f.png)] h-[160px] max-h-[160px] bg-center flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl">
              <div className="w-full p-8 relative z-10">
                <figcaption className="text-white text-[20px] font-medium mb-5">پادری دستبافت</figcaption>
                <Link href='/' className="py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]">
                  مشاهده و خرید پادری
                </Link>
              </div>
            </figure>
  
            <figure className="relative w-[65%] rounded-2xl bg-[url(/4f.png)] h-[160px] max-h-[160px] bg-cover bg-bottom flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl">
              <div className="w-full p-8 relative z-10">
                <figcaption className="text-white text-[20px] font-medium mb-5">موکت اتاق</figcaption>
                <Link href='/' className="py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]">
                  مشاهده و خرید موکت
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </section>
    );
  }
  