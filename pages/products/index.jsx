import { ProductData } from '@/Data';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const allProducts = ProductData;
const categories = ['همه', 'ابریشمی', 'ماشینی', 'دستباف', 'مدرن'];
const sortOptions = [
  { value: 'oldest', label: 'قدیمی‌ترین' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'low', label: 'ارزان‌ترین' },
  { value: 'high', label: 'گران‌ترین' },
];
const PRODUCTS_PER_PAGE = 6;

export default function Products() {
  const [category, setCategory] = useState('همه');
  const [sort, setSort] = useState('oldest');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000000]);

  // مقداردهی اولیه از localStorage فقط در مرورگر
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCategory = localStorage.getItem('category');
      const savedSort = localStorage.getItem('sort');
      if (savedCategory) setCategory(savedCategory);
      if (savedSort) setSort(savedSort);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('category', category);
      localStorage.setItem('sort', sort);
    }
  }, [category, sort]);

  const filtered = allProducts.filter((p) => {
    const price = parseInt(p.price);
    const matchCategory = category === 'همه' || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchPrice = price >= priceRange[0] && price <= priceRange[1];
    return matchCategory && matchSearch && matchPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    switch (sort) {
      case 'low':
        return priceA - priceB;
      case 'high':
        return priceB - priceA;
      case 'oldest':
        return a.id - b.id;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const currentProducts = sorted.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='px-4 md:px-10 py-10 min-h-screen'
    >
      <h1 className='text-center text-5xl font-bold mb-10 text-gray-800'>
        محصولات
      </h1>

      <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'>
        <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${
                cat === category
                  ? 'bg-[#CB1B1B] text-white border-[#CB1B1B] shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='relative w-full md:w-auto'>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className='appearance-none pr-10 pl-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:border-[#CB1B1B] focus:outline-none focus:ring-2 focus:ring-[#CB1B1B] transition-all duration-300 w-full md:w-60 cursor-pointer'
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className='absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-400'>
            {sort === 'high' ? (
              <FaSortAmountUp className='text-lg' />
            ) : sort === 'low' ? (
              <FaSortAmountDown className='text-lg' />
            ) : (
              <FaSortAmountDown className='rotate-90 text-lg' />
            )}
          </div>
        </div>
      </div>

      {/* سرچ */}
      <div className='flex flex-col md:flex-row items-center gap-6 mb-8'>
        <input
          type='text'
          placeholder='جستجو ...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CB1B1B]'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
        <AnimatePresence mode='wait'>
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className='bg-white shadow-md rounded-xl overflow-hidden'
            >
              <figure className='w-full flex justify-center'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-[325px] h-[385px] object-cover'
                />
              </figure>
              <div className='p-5 flex flex-col gap-2'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  {product.title}
                </h3>
                <div className='text-[#CB1B1B] font-bold text-md flex justify-between my-3.5'>
                  <span className='text-gray-800'>قیمت :</span>
                  <span>{product.price.toLocaleString('fa', 'ir')} تومان</span>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className='mt-3 py-3 px-4 border border-[#CB1B1B] text-[#CB1B1B] hover:bg-[#CB1B1B] hover:text-white rounded-md transition duration-700 ease-linear cursor-pointer text-center'
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='flex justify-center mt-12 gap-2 flex-wrap'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-10 h-10 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
              num === page
                ? 'bg-[#CB1B1B] text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </motion.section>
  );
}
