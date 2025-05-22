import { ProductData } from '@/Data';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext ';

export default function Dashboard() {
  const {
    cart,
    count,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const user = {
    name: 'سامان توفیقیان',
    email: 'samantofighian78@gmail.com',
  };

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Sample order status for carpet orders
  const orderStatus = {
    pending: 'در انتظار',
    processing: 'در حال پردازش',
    shipped: 'ارسال شده',
    delivered: 'تحویل شده',
  };

  const recommendedCarpets = ProductData.filter(
    (item) => item.id >= 1 && item.id < 4
  );

  return (
    <div className='min-h-screen px-[6%] py-4 sm:py-6 lg:py-8'>
      {/* Header Section */}
      <motion.header
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='mb-8 flex flex-col sm:flex-row items-center justify-between gap-4'
      >
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-950 tracking-tight'>
          خوش آمدید، {user.name} ✨
        </h1>
        <div className='flex items-center gap-3'>
          <button className='rounded-full bg-red-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2'>
            ویرایش پروفایل
          </button>
          <button className='rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2'>
            مرور فرش‌ها
          </button>
        </div>
      </motion.header>

      {/* Quick Stats Widget */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.2 }}
        className='mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
      >
        <div className='rounded-2xl bg-gradient-to-r from-red-600 to-red-800 p-6 text-white shadow-lg'>
          <p className='text-sm font-medium'>سفارش‌های کل</p>
          <p className='text-2xl font-bold'>{count}</p>
        </div>
        <div className='rounded-2xl bg-gradient-to-r from-amber-600 to-amber-800 p-6 text-white shadow-lg'>
          <p className='text-sm font-medium'>مجموع خرید</p>
          <p className='text-2xl font-bold'>{total.toLocaleString()} تومان</p>
        </div>
        <div className='rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white shadow-lg'>
          <p className='text-sm font-medium'>سفارش‌های در انتظار</p>
          <p className='text-2xl font-bold'>
            {cart.filter((item) => item.status === 'pending').length}
          </p>
        </div>
        <div className='rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 p-6 text-white shadow-lg'>
          <p className='text-sm font-medium'>امتیاز وفاداری</p>
          <p className='text-2xl font-bold'>0</p>
        </div>
      </motion.div>

      {/* Account Info Card */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.3 }}
        className='mb-8 rounded-3xl bg-white p-6 sm:p-8 shadow-xl  transition-all hover:shadow-2xl border border-[#ADADAD]'
      >
        <h2 className='mb-6 text-2xl font-bold text-red-950'>اطلاعات حساب</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex items-center space-x-3 rounded-xl bg-amber-50 p-4 transition-all hover:bg-amber-100'>
            <svg
              className='h-6 w-6 text-red-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <div>
              <p className='text-xs text-gray-600'>ایمیل</p>
              <p className='text-sm font-medium text-gray-900'>{user.email}</p>
            </div>
          </div>
          <div className='flex items-center space-x-3 rounded-xl bg-amber-50 p-4 transition-all hover:bg-amber-100'>
            <svg
              className='h-6 w-6 text-red-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              />
            </svg>
            <div>
              <p className='text-xs text-gray-600'>تعداد سفارش‌ها</p>
              <p className='text-sm font-medium text-gray-900'>{count}</p>
            </div>
          </div>
          <div className='flex items-center space-x-3 rounded-xl bg-amber-50 p-4 transition-all hover:bg-amber-100'>
            <svg
              className='h-6 w-6 text-red-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <div>
              <p className='text-xs text-gray-600'>مجموع مبلغ</p>
              <p className='text-sm font-medium text-gray-900'>
                {total.toLocaleString()} تومان
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Orders Card */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.4 }}
        className='mb-8 rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-[#ADADAD]'
      >
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-red-950'>
            آخرین سفارش‌های فرش
          </h2>
          <button className='text-sm font-semibold text-blue-700 hover:text-blue-900'>
            مشاهده همه
          </button>
        </div>
        {cart.length === 0 ? (
          <div className='flex flex-col items-center py-12'>
            <svg
              className='h-16 w-16 text-gray-400 mb-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <p className='text-base text-gray-600 mb-4'>
              هنوز سفارشی ثبت نشده است.
            </p>
            <button className='rounded-full bg-amber-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-800'>
              شروع خرید فرش
            </button>
          </div>
        ) : (
          <div className='space-y-4'>
            {cart
              .slice(-5)
              .reverse()
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: 0.1 * index }}
                  className='flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50/50 p-4 text-sm text-gray-900 transition-all hover:bg-amber-100 hover:shadow-md'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='h-12 w-12 rounded-lg bg-gray-200' />{' '}
                    {/* Placeholder for carpet image */}
                    <div>
                      <p className='font-semibold'>{item.name}</p>
                      <p className='text-xs text-gray-600'>
                        جنس: {item.material || 'نامشخص'}
                      </p>
                      <p className='text-xs text-gray-600'>
                        ابعاد: {item.size || 'نامشخص'}
                      </p>
                      <p className='text-xs text-gray-600'>
                        وضعیت: {orderStatus[item.status] || 'نامشخص'}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className='rounded-full bg-gray-200 p-1 hover:bg-gray-300'
                        disabled={(item.quantity || 1) === 1}
                      >
                        <svg
                          className='h-4 w-4 text-gray-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M20 12H4'
                          />
                        </svg>
                      </button>
                      <span className='w-8 text-center'>
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className='rounded-full bg-gray-200 p-1 hover:bg-gray-300'
                      >
                        <svg
                          className='h-4 w-4 text-gray-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 4v16m8-8H4'
                          />
                        </svg>
                      </button>
                    </div>
                    <span className='font-semibold'>
                      {(item.price * (item.quantity || 1)).toLocaleString()}{' '}
                      تومان
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='text-xs font-medium text-red-700 hover:text-red-900'
                    >
                      حذف
                    </button>
                    <button className='text-xs font-medium text-blue-700 hover:text-blue-900'>
                      جزئیات
                    </button>
                  </div>
                </motion.div>
              ))}
            <div className='mt-6 flex justify-end'>
              <button className='rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-800'>
                تسویه حساب
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Recommended Carpets Section */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.5 }}
        className='rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-[#ADADAD]'
      >
        <h2 className='mb-6 text-2xl font-bold text-red-950'>
          فرش‌های پیشنهادی
        </h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {recommendedCarpets.map((carpet, index) => (
            <motion.div
              key={carpet.id}
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.1 * index }}
              className='rounded-xl border border-amber-100 bg-amber-50/50 p-4 transition-all hover:bg-amber-100 hover:shadow-md'
            >
              <figure className=' w-full rounded-lg  mb-4'>
                <img src={carpet.image} alt='' />
              </figure>
              {/* Placeholder for carpet image */}
              <p className='font-semibold text-gray-900'>{carpet.title}</p>
              <p className='text-xs text-gray-600'>جنس : ابریشم</p>
              <p className='text-xs text-gray-600'>ابعاد : 3 * 4 متر</p>
              <p className='text-sm font-medium text-gray-900 mt-2'>
                {carpet.price.toLocaleString()} تومان
              </p>
              <button className='mt-3 w-full rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800'>
                افزودن به سبد
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
