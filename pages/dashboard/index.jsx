// pages/dashboard.jsx

import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-2xl font-bold mb-6'
      >
        خوش آمدی، javad 👋
      </motion.h1>

      <div className='bg-white p-4 rounded-xl shadow-md mb-6'>
        <h2 className='font-semibold text-gray-700'>اطلاعات حساب</h2>
        <p className='text-sm text-gray-600'>ایمیل: saman@gmail.com</p>
        <p className='text-sm text-gray-600'>تعداد سفارش‌ها: 3</p>
      </div>

      <div className='bg-white p-4 rounded-xl shadow-md'>
        <h2 className='font-semibold text-gray-700 mb-4'>آخرین سفارش‌ها</h2>

        <div className='flex justify-between border-b py-2 text-sm'>
          <span>سفارش #</span>
          <span>خوب</span>
          <span>22</span>
        </div>
      </div>
    </div>
  );
}
