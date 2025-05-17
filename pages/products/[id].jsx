import NotFoundSection from '@/Components/NotFoundSection/NotFoundSection';
import Product from '@/Components/Product/Product';
import Seller from '@/Components/Product/Seller';
import Slider3 from '@/Components/Slider/Slider3';
import { ProductData } from '@/Data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdHome } from 'react-icons/io';
export default function ProductById() {
  const { id } = useRouter().query;
  const product = ProductData.find((item) => item.id == parseInt(id));
  if (!product) return <NotFoundSection />;

  return (
    <section className='w-full mt-8'>
      <div className='w-full grid grid-cols-12 px-[6%]'>
        <div className='col-span-12'>
          <nav aria-label='breadcrumb' dir='rtl'>
            <ol className='inline-flex items-center space-x-reverse space-x-2 py-2 text-sm font-medium'>
              <li className='inline-flex items-center'>
                <Link
                  href='/'
                  className='text-[#CB1B1B] text-[18px] flex items-center gap-x-2'
                >
                  <IoMdHome size='1.5rem' />
                  خانه
                </Link>
              </li>
              <li className='inline-flex items-center space-x-2 space-x-reverse'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link href='/products' className='text-[#CB1B1B] text-[18px]'>
                  محصولات
                </Link>
              </li>
              <li
                className='inline-flex items-center space-x-2 space-x-reverse'
                aria-current='page'
              >
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link className='text-[#909090] text-[18px]' href='/'>
                  {product.title}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className='col-span-12 xl:col-span-9 mt-10 xl:mt-16 px-3.5'>
          <Product productParent={product} />
        </div>
        <div className='col-span-12 md:col-span-8 md:col-start-3 xl:col-span-3 mt-2 md:mt-16 flex items-center xl:px-3.5'>
          <Seller productSeller={product} />
        </div>
        <div className='col-span-12 mt-10'>
          <Slider3 />
        </div>
      </div>
    </section>
  );
}
