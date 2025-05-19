import EmptyCart from '@/Components/EmptyCart/EmptyCart';
import CartSummary from '@/Components/Shopping/Seller';
import ShoppingCart from '@/Components/Shopping/Shopping';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { useCart } from '../../context/CartContext ';

export default function Shopping() {
  const { cart, count, total } = useCart();

  return (
    <section className='w-full mt-8 mb-10 xl:mb-28'>
      <div className='w-full grid grid-cols-12 px-[6%] xl:gap-x-28'>
        <div className='col-span-12'>
          <nav aria-label='breadcrumb' dir='rtl' className='w-full'>
            <ol className='inline-flex items-center space-x-reverse space-x-2 py-2 text-sm font-medium'>
              <li className='inline-flex items-center'>
                <Link
                  href='/'
                  className='text-[#CB1B1B] text-[14px] sm:text-[16px] md:text-[18px] flex items-center gap-x-2'
                >
                  <IoMdHome size='1.5rem' />
                  خانه
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
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='text-[#909090] text-[14px] sm:text-[16px] md:text-[18px]'>
                  سبد خرید
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {count > 0 && total > 0 ? (
          <>
            <div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-8 border border-[#ADADAD] py-14 px-6 rounded-[12px] mt-8'>
              {cart.map((item) => (
                <ShoppingCart
                  key={item.id}
                  ShoppingImage={item.image}
                  ShoppingAbout={item}
                />
              ))}
            </div>

            <div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 mt-8'>
              <CartSummary />
            </div>
          </>
        ) : (
          <div className='col-span-12'>
            <EmptyCart />
          </div>
        )}
      </div>
    </section>
  );
}
