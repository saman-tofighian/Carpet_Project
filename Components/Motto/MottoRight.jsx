import { motion } from 'framer-motion';
export default function MottoRight() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.4 }}
      viewport={{ once: true }}
      className='col-span-12 lg:col-span-6 xl:col-span-5 mt-10 order-2 lg:order-1'
    >
      <h1 className='font-bold text-[#121212] text-center text-[24px] md:text-[33px] lg:text-[2.5rem]'>
        خرید راحت فرش،در <strong className='text-[#CB1B1B]'>ایرانی فرش</strong>
      </h1>
      <p className='mt-4 text-[#121212] leading-[200%] text-center text-[16px] md:text-[20px] lg:text-2xl font-medium'>
        با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و از تنوع
        بی نظیر فرش ها لذت ببر.
      </p>
      <div className='w-full flex justify-evenly md:justify-center lg:justify-evenly items-center mt-14 gap-x-4 md:gap-x-8 lg:gap-x-2 xl:gap-x-0 flex-col gap-y-6 sm:flex-row sm:gap-y-0'>
        <button className='outline-0 rounded-[12px] border border-[#CB1B1B] text-[#CB1B1B] p-3 lg:p-3.5 bg-transparent cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white text-[15px] xl:text-[16px]'>
          محصولات ویژه ایرانی فرش
        </button>
        <button className='outline-0 rounded-[12px] bg-[#CB1B1B] text-white p-3 lg:p-3.5 cursor-pointer ease-in-out duration-700 hover:text-[#cb1b1b] hover:bg-transparent border border-[#CB1B1B] text-[15px] xl:text-[16px]'>
          عضویت در باشگاه مشتریان
        </button>
      </div>
    </motion.div>
  );
}
