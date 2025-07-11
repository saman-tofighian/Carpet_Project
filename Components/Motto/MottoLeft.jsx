import { motion } from 'framer-motion';

export default function MottoLeft() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='order-1 lg:order-2 col-span-12 lg:col-span-6 xl:col-span-7 pr-10 lg:pr-0'
    >
      <figure className='flex justify-center lg:justify-end xl:pl-16 w-full h-[450px]'>
        <img src='/motto.webp' alt='فرش' loading='lazy' />
      </figure>
    </motion.div>
  );
}
