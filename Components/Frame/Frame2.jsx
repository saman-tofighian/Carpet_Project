import Link from 'next/link';

export default function Frame2() {
  return (
    <section className='w-full mt-[6rem] lg:mt-40 pb-36'>
      <div className='w-full px-[6%] flex items-center flex-wrap gap-y-12 xl:gap-y-0 justify-center'>
        <div className='w-full md:w-[60%] lg:w-full xl:w-[55%] flex items-center justify-center gap-x-9  flex-wrap xl:flex-nowrap gap-y-10 xl:gap-y-0'>
          <figure
            className='relative w-full lg:w-[47%] xl:w-[65%] rounded-2xl bg-[url(/5f.png)] h-[318px] max-h-[318px] bg-cover flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl'
            loading='lazy'
          >
            <div className='w-full p-8 relative z-10'>
              <figcaption className='text-white text-[20px] font-medium mb-5'>
                فرش مدرن فانتزی
              </figcaption>
              <Link
                href='/'
                className='py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]'
              >
                مشاهده و خرید فرش مدرن
              </Link>
            </div>
          </figure>

          <figure
            className='relative w-full lg:w-[47%] xl:w-[65%] rounded-2xl bg-[url(/6f.png)] h-[318px] max-h-[318px] bg-cover flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl'
            loading='lazy'
          >
            <div className='w-full p-8 relative z-10'>
              <figcaption className='text-white text-[20px] font-medium mb-5'>
                فرش دستبافت تبریز
              </figcaption>
              <Link
                href='/'
                className='py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]'
              >
                مشاهده و خرید فرش تبریز
              </Link>
            </div>
          </figure>
        </div>

        <div className='w-full md:w-[60%] lg:w-full xl:w-[45%] flex flex-wrap justify-center gap-y-9 lg:gap-x-9 xl:gap-x-0'>
          <figure
            className='relative w-full lg:w-[47%] xl:w-[65%] rounded-2xl bg-[url(/7f.png)] h-[160px] max-h-[160px] bg-center flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl'
            loading='lazy'
          >
            <div className='w-full p-8 relative z-10'>
              <figcaption className='text-white text-[20px] font-medium mb-5'>
                قالیچه دستبافت
              </figcaption>
              <Link
                href='/'
                className='py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]'
              >
                مشاهده و خرید قالیچه
              </Link>
            </div>
          </figure>

          <figure
            className='relative w-full lg:w-[47%] xl:w-[65%] rounded-2xl bg-[url(/8f.png)] h-[160px] max-h-[160px] bg-cover bg-bottom flex items-end after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#013075] after:opacity-80 after:rounded-2xl'
            loading='lazy'
          >
            <div className='w-full p-8 relative z-10'>
              <figcaption className='text-white text-[20px] font-medium mb-5'>
                قالیچه ماشینی
              </figcaption>
              <Link
                href='/'
                className='py-2.5 px-4 border rounded-[12px] border-white bg-transparent text-white font-semibold ease-linear duration-700 hover:border-[#013075]'
              >
                مشاهده و خرید قالیچه
              </Link>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
