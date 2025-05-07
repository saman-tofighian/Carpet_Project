import { motion } from 'framer-motion';
export default function MottoLeft() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.4 }}
      viewport={{ once: true }}
      className='col-span-12 lg:col-span-6 xl:col-span-7 order-1 lg:order-2 pr-10 lg:pr-0'
    >
      <figure className='w-full flex justify-center lg:justify-end xl:pl-16 h-[450px]'>
        <img
          src='./motto.webp'
          alt='carpet'
          className='w-[328px] h-[434px] md:w-[527px] md:h-[470px]'
          loading='lazy'
        />
      </figure>
    </motion.div>
  );
}
