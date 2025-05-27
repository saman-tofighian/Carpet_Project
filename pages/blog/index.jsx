import { BlogPosts } from '@/Data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Blog() {
  const posts = BlogPosts;

  return (
    <div className='px-6 md:px-20 py-16 w-full text-gray-800'>
      <h1 className='drop-shadow-md mb-12 font-extrabold text-[#CB1B1B] text-4xl md:text-5xl text-center'>
        مجله ایرانی فرش
      </h1>

      <div className='gap-10 grid md:grid-cols-3'>
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8 }}
            className='group bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition duration-300'
          >
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-80 object-center group-hover:scale-105 transition duration-300'
            />
            <div className='flex flex-col justify-between p-5 h-[230px]'>
              <div>
                <p className='mb-1 text-gray-500 text-sm'>{post.date}</p>
                <h2 className='mb-3 font-bold text-[#CB1B1B] text-xl'>
                  {post.title}
                </h2>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {post.excerpt}
                </p>
              </div>
              <Link
                href='/'
                className='flex items-center gap-x-2.5 mt-4 font-semibold text-[#CB1B1B] text-sm hover:underline transition'
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
