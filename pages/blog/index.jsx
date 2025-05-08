import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'چطور یک فرش دستباف واقعی و باارزش بخریم؟',
      excerpt:
        'همه فرش‌ها دستباف نیستند! با این راهنما یاد بگیر چطور بین هزار مدل، فرش اصیل ایرانی رو تشخیص بدی و با خیال راحت بخری.',
      image: '/blog1.webp',
      date: '۲ اردیبهشت ۱۴۰۴',
    },
    {
      id: 2,
      title: 'ماشینی یا دستباف؟ راهنمای انتخاب فرش برای خونه‌ات',
      excerpt:
        'بین فرش ماشینی شیک یا فرش دستباف اصیل مونده‌ای؟ این مقاله کمک‌ات می‌کنه دقیق و هوشمند انتخاب کنی؛ نه با شک و تردید!',
      image: '/blog2.webp',
      date: '۲۵ فروردین ۱۴۰۴',
    },
    {
      id: 3,
      title: '۵ راز مهم برای موندگاری و زیبایی فرش',
      excerpt:
        'با چند نکته ساده اما طلایی، عمر فرش‌ات رو چند برابر کن! این نکات رو فرش‌فروشی‌ها بهت نمی‌گن...',
      image: '/blog3.webp',
      date: '۱۸ فروردین ۱۴۰۴',
    },
  ];

  return (
    <div className='w-full bg-[#fffdfb] px-6 md:px-20 py-16 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#CB1B1B] drop-shadow-md'>
        مجله ایرانی فرش
      </h1>

      <div className='grid md:grid-cols-3 gap-10'>
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8 }}
            className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group'
          >
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-80 object-center group-hover:scale-105 transition duration-300'
            />
            <div className='p-5 flex flex-col justify-between h-[230px]'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>{post.date}</p>
                <h2 className='text-xl font-bold text-[#CB1B1B] mb-3'>
                  {post.title}
                </h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {post.excerpt}
                </p>
              </div>
              <Link
                href='/'
                className='mt-4 text-sm font-semibold text-[#CB1B1B] hover:underline transition flex items-center gap-x-2.5'
              >
                مطالعه کامل مقاله
                <FaArrowLeftLong />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
