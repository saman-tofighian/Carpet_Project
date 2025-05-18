import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export default function CheckoutPage() {
  return (
    <div className='min-h-screenpy-12 px-4 sm:px-6 lg:px-8 mt-14 mb-24'>
      <div className='max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8'>
        <div className='flex items-center mb-8'>
          <FaShoppingCart className='text-red-500 text-3xl ml-2' />
          <h2 className='text-2xl font-bold text-gray-800'>نهایی‌سازی خرید</h2>
        </div>

        {/* لیست محصولات */}
        <div className='space-y-4 mb-10'>
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className='flex justify-between items-center border p-4 rounded-lg'
            >
              <div className='flex items-center gap-4'>
                <div className='w-20 h-20 bg-gray-100 rounded-lg' />
                <div>
                  <h3 className='font-semibold text-gray-700'>
                    فرش کاشان اصیل
                  </h3>
                  <p className='text-sm text-gray-500'>۳×۲ متر | زمینه لاکی</p>
                </div>
              </div>
              <div className='text-red-600 font-bold text-lg'>
                ۳٬۹۰۰٬۰۰۰ تومان
              </div>
            </div>
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className='border-t pt-6 flex flex-col md:flex-row md:justify-between gap-6'>
          <div className='text-gray-700 space-y-2'>
            <p>
              جمع کل: <span className='font-bold'>۱۱٬۷۰۰٬۰۰۰ تومان</span>
            </p>
            <p>
              هزینه ارسال: <span className='text-green-600'>رایگان</span>
            </p>
          </div>
          <Link
            href='/payment'
            className='bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold'
          >
            ادامه به پرداخت
            <HiOutlineArrowLeft className='text-xl' />
          </Link>
        </div>
      </div>
    </div>
  );
}
