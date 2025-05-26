import { motion } from 'framer-motion';
export default function MottoRight() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='order-2 lg:order-1 col-span-12 lg:col-span-6 xl:col-span-5 mt-10'
    >
      <h1 className='font-bold text-[#121212] text-[24px] md:text-[33px] lg:text-[2.5rem] text-center'>
        خرید راحت فرش،در <strong className='text-[#CB1B1B]'>ایرانی فرش</strong>
      </h1>
      <p className='mt-4 font-medium text-[#121212] text-[16px] md:text-[20px] lg:text-2xl text-center leading-[200%]'>
        با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و از تنوع
        بی نظیر فرش ها لذت ببر.
      </p>
      <div className='flex sm:flex-row flex-col justify-evenly md:justify-center lg:justify-evenly items-center gap-x-4 gap-y-6 sm:gap-y-0 md:gap-x-8 lg:gap-x-2 xl:gap-x-0 mt-14 w-full'>
        <button className='bg-transparent hover:bg-[#cb1b1b] p-3 lg:p-3.5 border border-[#CB1B1B] rounded-[12px] outline-0 font-black text-[#CB1B1B] text-[15px] xl:text-[16px] hover:text-white duration-700 ease-in-out cursor-pointer'>
          محصولات ویژه ایرانی فرش
        </button>
        <button className='bg-[#CB1B1B] hover:bg-transparent p-3 lg:p-3.5 border border-[#CB1B1B] rounded-[12px] outline-0 font-black text-[15px] text-white xl:text-[16px] hover:text-[#cb1b1b] duration-700 ease-in-out cursor-pointer'>
          عضویت در باشگاه مشتریان
        </button>
      </div>
    </motion.div>
  );
}
