import { motion } from 'framer-motion';
export default function Image() {
  return (
    <motion.figure
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6'
    >
      <div className='relative w-fit h-[700px] rounded-[48px] overflow-hidden border-red-700'>
        <img
          src='./si.png'
          alt='signup_image'
          className='w-full h-full object-cover'
          loading='lazy'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00000000] to-[#1f2161c5] opacity-80'></div>
      </div>
    </motion.figure>
  );
}
