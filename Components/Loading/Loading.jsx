import { motion } from 'framer-motion';
export default function Loading() {
  return (
    <div className='fixed inset-0 bg-white flex flex-col items-center justify-center z-50'>
      <motion.div
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className='w-72 h-80 overflow-hidden'
      >
        <img
          src='/loader.png'
          alt='در حال پهن شدن فرش...'
          className='w-full h-full object-center'
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className='mt-8 text-gray-700 text-center max-w-xs leading-relaxed'
      >
        دگر بار فرش می‌گستریم... منتظر باش تا خانه‌ات به زیبایی فرش ایرانی
        بدرخشد!
      </motion.p>
    </div>
  );
}
