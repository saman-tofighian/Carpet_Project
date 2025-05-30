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
      <h1 className='mb-10 font-bold text-[#CB1B1B] text-5xl text-center'>
        محصولات
      </h1>

      <div className='flex md:flex-row flex-col justify-between items-center gap-6 mb-10'>
        <div className='flex flex-wrap justify-center md:justify-start gap-3'>
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
            className='bg-white shadow-sm py-2 pr-10 pl-4 border border-gray-300 hover:border-[#CB1B1B] rounded-md focus:outline-none focus:ring-[#CB1B1B] focus:ring-2 w-full md:w-60 text-gray-800 transition-all duration-300 appearance-none cursor-pointer'
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className='top-1/2 right-3 absolute text-gray-400 -translate-y-1/2 pointer-events-none transform'>
            {sort === 'high' ? (
              <FaSortAmountUp className='text-lg' />
            ) : sort === 'low' ? (
              <FaSortAmountDown className='text-lg' />
            ) : (
              <FaSortAmountDown className='text-lg rotate-90' />
            )}
          </div>
        </div>
      </div>

      {/* سرچ */}
      <div className='flex md:flex-row flex-col items-center gap-6 mb-8'>
        <input
          type='text'
          placeholder='جستجو ...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#CB1B1B] focus:ring-2 w-full md:w-96'
        />
      </div>

      <div className='gap-x-12 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
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
              <figure className='flex justify-center w-full'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-[325px] h-[385px] object-cover'
                />
              </figure>
              <div className='flex flex-col gap-2 p-5'>
                <h3 className='font-semibold text-gray-800 text-lg'>
                  {product.title}
                </h3>
                <div className='flex justify-between my-3.5 font-bold text-[#CB1B1B] text-md'>
                  <span className='text-gray-800'>قیمت :</span>
                  <span>{product.price.toLocaleString('fa', 'ir')} تومان</span>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className='hover:bg-[#CB1B1B] mt-3 px-4 py-3 border border-[#CB1B1B] rounded-md text-[#CB1B1B] hover:text-white text-center transition duration-700 ease-linear cursor-pointer'
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='flex flex-wrap justify-center gap-2 mt-12'>
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
