export default function AboutUs() {
  return (
    <div className='w-full bg-white text-right px-6 md:px-20 py-5 xl:py-8 text-gray-800'>
      <div className='relative w-full h-60 md:h-96 mb-10 rounded-xl overflow-hidden'>
        <img
          src='/6f.png'
          alt='درباره ما'
          className='w-full h-full object-center'
        />
      </div>
      <div className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-[#CB1B1B] mb-4'>
          ایرانی فرش، اصالت در هر تار و پود
        </h2>
        <p className='leading-loose text-lg text-gray-700'>
          ما در <strong className='text-[#CB1B1B]'>ایرانی فرش</strong> با بیش از
          ۳۰ سال تجربه در زمینه تولید، توزیع و فروش فرش‌های اصیل ایرانی، تلاش
          کرده‌ایم هنر ایرانی را به خانه‌های ایرانی و جهان عرضه کنیم. هدف ما حفظ
          اصالت، کیفیت و زیبایی فرش ایرانی در کنار ارائه تجربه خریدی آسان و
          مطمئن است.
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-10 mb-12'>
        <div>
          <h3 className='text-xl font-bold text-[#CB1B1B] mb-3'>ماموریت ما</h3>
          <p className='text-gray-700 leading-loose'>
            ارتقای جایگاه فرش ایرانی در بازارهای جهانی و فراهم‌کردن دسترسی آسان
            مشتریان به بهترین محصولات با اصالت.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-bold text-[#CB1B1B] mb-3'>چشم‌انداز</h3>
          <p className='text-gray-700 leading-loose'>
            تبدیل‌شدن به معتبرترین فروشگاه آنلاین فرش ایرانی و مرجع انتخاب برای
            دوستداران هنر و فرهنگ اصیل ایرانی.
          </p>
        </div>
      </div>
      <div className='bg-[#F9F9F9] p-8 rounded-xl shadow'>
        <h3 className='text-2xl font-bold text-[#CB1B1B] mb-6 text-center'>
          چرا ایرانی فرش؟
        </h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 xl:gap-y-0 text-center text-gray-700 mt-12 lg:mt-0'>
          <div>
            <span className='text-3xl'>🚚</span>
            <p className='mt-2 font-medium'>ارسال رایگان</p>
          </div>
          <div>
            <span className='text-3xl'>🛡️</span>
            <p className='mt-2 font-medium'>ضمانت اصالت کالا</p>
          </div>
          <div>
            <span className='text-3xl'>💳</span>
            <p className='mt-2 font-medium'>پرداخت امن</p>
          </div>
          <div>
            <span className='text-3xl'>📞</span>
            <p className='mt-2 font-medium'>پشتیبانی ۲۴ ساعته</p>
          </div>
        </div>
      </div>
    </div>
  );
}
