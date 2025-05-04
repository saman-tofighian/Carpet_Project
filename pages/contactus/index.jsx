export default function ContactUs() {
  return (
    <div className='w-full bg-white text-right px-6 md:px-20 py-16 text-gray-800'>
      <div className='mb-12 sm:text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-[#CB1B1B] mb-4'>
          تماس با ما
        </h1>
        <p className='text-gray-600 text-lg sm:text-xl'>
          همیشه آماده شنیدن صدای گرم شما هستیم.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-12'>
        <div className='lg:col-span-2 bg-[#F9F9F9] p-8 rounded-xl shadow space-y-6'>
          <h2 className='text-2xl font-bold text-[#CB1B1B] mb-4'>ارسال پیام</h2>
          <div>
            <label className='block mb-2 font-medium'>نام</label>
            <input
              type='text'
              placeholder='مثلاً سامان توفیقیان'
              className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#CB1B1B]'
            />
          </div>
          <div>
            <label className='block mb-2 font-medium'>ایمیل</label>
            <input
              type='email'
              placeholder='example@email.com'
              className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#CB1B1B]'
            />
          </div>
          <div>
            <label className='block mb-2 font-medium'>پیام</label>
            <textarea
              rows='5'
              placeholder='پیام خود را بنویسید...'
              className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#CB1B1B] resize-none'
            />
          </div>
          <button
            type='submit'
            className='bg-[#CB1B1B] text-white px-6 py-3 rounded-md hover:bg-[#a51818] transition font-semibold cursor-pointer'
          >
            ارسال
          </button>
        </div>
        <div className='space-y-6'>
          <div className='bg-gray-100 p-6 rounded-xl shadow text-sm space-y-2'>
            <h3 className='text-lg font-bold text-[#CB1B1B]'>آدرس</h3>
            <p>تهران، خیابان ولیعصر، مرکز فرش ایرانی</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-xl shadow text-sm space-y-2'>
            <h3 className='text-lg font-bold text-[#CB1B1B]'>ایمیل</h3>
            <p>samantofighian78@gmail.com</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-xl shadow text-sm space-y-2'>
            <h3 className='text-lg font-bold text-[#CB1B1B]'>شماره تماس</h3>
            <p>021-12345678</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-xl shadow text-sm space-y-2'>
            <h3 className='text-lg font-bold text-[#CB1B1B]'>تلگرام</h3>
            <a
              href='https://t.me/iranifarsh'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline flex items-center gap-2'
            >
              <span>t.me/iranifarsh</span>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M9.982 16.569l-.392 5.524c.562 0 .807-.24 1.102-.527l2.64-2.506 5.478 3.992c1.005.55 1.72.26 1.978-.89l3.582-16.84c.329-1.538-.558-2.138-1.538-1.775L2.508 10.354c-1.512.592-1.49 1.439-.258 1.815l5.61 1.752 12.996-8.2-10.874 10.848z' />
              </svg>
            </a>
          </div>
          <div className='bg-gray-100 p-6 rounded-xl shadow text-sm space-y-2'>
            <h3 className='text-lg font-bold text-[#CB1B1B]'>اینستاگرام</h3>
            <a
              href='https://www.instagram.com/iranifarsh' // ← آدرس درست اینستاگرام
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#CB1B1B] hover:underline flex items-center gap-2'
            >
              <span>instagram.com/iranifarsh</span>
              <svg
                className='w-6 h-6 text-[#CB1B1B] hover:text-pink-600 transition'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='mt-16 xl:mt-28'>
        <h2 className='text-3xl font-bold text-[#CB1B1B] mb-10 text-center'>
          ما کجا هستیم؟
        </h2>
        <div className='rounded-xl overflow-hidden shadow-lg w-full h-72 md:h-96'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6267716601036!2d51.417947114738705!3d35.732378180181295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017d0b6b6245%3A0xf7db0e46d7dc20fa!2z2KfZhNmF2LHYp9ix2YUg2KfZhNio2KfYsduM2YbbjCDYp9mE2KjYsdmI2LHYp9uMINmI2LHYp9ix2KfYqQ!5e0!3m2!1sen!2s!4v1700000000000'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
