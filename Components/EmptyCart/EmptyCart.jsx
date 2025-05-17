import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function EmptyCart() {
  return (
    <section className='grid grid-cols-12 place-items-center mt-8 mb-28'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='col-span-12 md:col-span-8 lg:col-span-12 bg-white shadow-2xl rounded-2xl p-10 mt-20 text-center'
      >
        <div className='flex flex-col items-center justify-center gap-4'>
          <FaShoppingCart className='text-6xl text-gray-400' />
          <h1 className='text-2xl font-bold text-gray-700'>
            سبد خرید شما خالی است!
          </h1>
          <p className='text-gray-600 text-sm mt-2 leading-6'>
            قالیچه‌ای در سبدتان پهن نشده...
            <br />
            وقتشه نگاهی به گنجینه فرش‌هامون بندازین.
          </p>
          <Link
            href='/products'
            className='inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition duration-300'
          >
            رفتن به فروشگاه
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
