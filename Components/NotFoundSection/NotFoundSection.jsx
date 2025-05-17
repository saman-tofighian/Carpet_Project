import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
export default function NotFoundSection() {
  return (
    <section className='grid grid-cols-12 place-items-center mt-8 mb-28'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='col-span-12 md:col-span-8 lg:col-span-12 bg-white shadow-2xl rounded-2xl p-10 mt-20 text-center'
      >
        <div className='flex flex-col items-center justify-center gap-4'>
          <FaSearch className='text-6xl text-red-500' />
          <h1 className='text-2xl font-extrabold text-gray-800'>
            فرشی با این شناسه پیدا نشد!
          </h1>
          <p className='text-gray-600 text-sm mt-2 leading-6'>
            گره‌ای از نقش‌ونگارهای ایرانی در این مسیر نبود...
            <br />
            شاید فرش مورد نظرت در میان طرح‌های دیگر ما پنهان شده باشد.
          </p>
          <Link
            href='/products'
            className='inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition duration-300'
          >
            بازگشت به گالری فرش‌ها
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
