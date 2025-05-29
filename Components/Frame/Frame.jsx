import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Frame() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className='mt-[6rem] lg:mt-40 pb-36 w-full'>
      <div className='flex flex-wrap justify-center items-center gap-y-12 xl:gap-y-0 px-[6%] w-full'>
        <motion.div
          className='flex flex-wrap xl:flex-nowrap justify-center items-center gap-x-9 gap-y-10 xl:gap-y-0 w-full md:w-[60%] lg:w-full xl:w-[55%]'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.figure
            className='group relative flex items-end bg-[url(/1f.webp)] bg-cover rounded-2xl w-full lg:w-[47%] xl:w-[65%] h-[318px] max-h-[318px] overflow-hidden'
            variants={cardVariants}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#013075] opacity-80 group-hover:opacity-90 rounded-2xl transition-opacity duration-500' />
            <div className='z-10 relative p-8 w-full'>
              <figcaption className='mb-5 font-medium text-[20px] text-white'>
                فرش های جدید
              </figcaption>
              <Link
                href='/'
                className='bg-transparent hover:bg-[#013075] px-4 py-2.5 border border-white rounded-[12px] font-semibold text-white duration-700 ease-linear'
                aria-label='مشاهده و خرید فرش‌های جدید ایرانی'
              >
                مشاهده و خرید فرش جدید
              </Link>
            </div>
          </motion.figure>
          <motion.figure
            className='group relative flex items-end bg-[url(/2f.webp)] bg-cover rounded-2xl w-full lg:w-[47%] xl:w-[65%] h-[318px] max-h-[318px] overflow-hidden'
            variants={cardVariants}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#013075] opacity-80 group-hover:opacity-90 rounded-2xl transition-opacity duration-500' />
            <div className='z-10 relative p-8 w-full'>
              <figcaption className='mb-5 font-medium text-[20px] text-white'>
                فرش های رنگارنگ
              </figcaption>
              <Link
                href='/'
                className='bg-transparent hover:bg-[#013075] px-4 py-2.5 border border-white rounded-[12px] font-semibold text-white duration-700 ease-linear'
                aria-label='مشاهده و خرید فرش‌های رنگارنگ ایرانی'
              >
                مشاهده و خرید فرش رنگارنگ
              </Link>
            </div>
          </motion.figure>
        </motion.div>
        <motion.div
          className='flex flex-wrap justify-center gap-y-9 lg:gap-x-9 xl:gap-x-0 w-full md:w-[60%] lg:w-full xl:w-[45%]'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.figure
            className='group relative flex items-end bg-[url(/3f.webp)] bg-center rounded-2xl w-full lg:w-[47%] xl:w-[65%] h-[160px] max-h-[160px] overflow-hidden'
            variants={cardVariants}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#013075] opacity-80 group-hover:opacity-90 rounded-2xl transition-opacity duration-500' />
            <div className='z-10 relative p-8 w-full'>
              <figcaption className='mb-5 font-medium text-[20px] text-white'>
                پادری دستبافت
              </figcaption>
              <Link
                href='/'
                className='bg-transparent hover:bg-[#013075] px-4 py-2.5 border border-white rounded-[12px] font-semibold text-white duration-700 ease-linear'
                aria-label='مشاهده و خرید پادری‌های دستبافت ایرانی'
              >
                مشاهده و خرید پادری
              </Link>
            </div>
          </motion.figure>
          <motion.figure
            className='group relative flex items-end bg-[url(/4f.webp)] bg-cover bg-bottom rounded-2xl w-full lg:w-[47%] xl:w-[65%] h-[160px] max-h-[160px] overflow-hidden'
            variants={cardVariants}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#013075] opacity-80 group-hover:opacity-90 rounded-2xl transition-opacity duration-500' />
            <div className='z-10 relative p-8 w-full'>
              <figcaption className='mb-5 font-medium text-[20px] text-white'>
                موکت اتاق
              </figcaption>
              <Link
                href='/'
                className='bg-transparent hover:bg-[#013075] px-4 py-2.5 border border-white rounded-[12px] font-semibold text-white duration-700 ease-linear'
                aria-label='مشاهده و خرید موکت‌های ایرانی'
              >
                مشاهده و خرید موکت
              </Link>
            </div>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
