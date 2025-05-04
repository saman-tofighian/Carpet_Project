import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-[#fdf8f2] px-4 py-16'>
      <div className='w-full max-w-4xl text-center px-6 md:px-12 lg:px-0'>
        <div className='relative w-full'>
          <img
            src='/404.jpg'
            alt='فرش گمشده'
            className='mx-auto w-full max-w-full h-[270px] lg:h-[550px] rounded-3xl shadow-xl object-center'
          />
          <h4 className='absolute top-4 left-3 bg-white bg-opacity-80 text-red-600 text-3xl font-black px-5 py-1 rounded-full shadow'>
            ۴۰۴
          </h4>
        </div>

        <div className='mt-16'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#cb1b1b] mb-6 leading-14'>
            ای بابا ! انگار گلیم این صفحه از زیر پامون کشیده شده!
          </h2>
          <p className='text-[#444] text-lg md:text-xl mb-8'>
            صفحه‌ای که دنبالش می‌گردی پیدا نشد. شاید نخ فرشش گره خورده 🤷‍♂️
          </p>
          <Link
            href='/'
            className='inline-block bg-[#cb1b1b] text-white text-lg md:text-xl font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-green-600'
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}
