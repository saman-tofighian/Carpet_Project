import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext ';

export default function About({ ShoppingAbout }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className='col-span-12 xl:col-span-8 mt-2'>
      <h5 className='font-bold text-[16px] sm:text-[18px] md:text-[18px] text-[#121212]'>
        {ShoppingAbout.title}
      </h5>
      <span className='block mt-4 text-[#121212] font-medium'>رنگ : آبی</span>
      <span className='block mt-4 text-[#121212] font-medium'>
        شرکت فرش سهند
      </span>
      <span className='block mt-4 text-[#121212] font-medium '>
        قیمت : {ShoppingAbout.price.toLocaleString('fa-IR')} تومان
      </span>
      <div className='py-1.5 px-2 border border-[#ADADAD] rounded-[8px] w-[150px] h-[50px] mt-6 flex items-center justify-around text-[#000000] text-[19px]'>
        <button
          className='cursor-pointer'
          onClick={() => increaseQuantity(ShoppingAbout.id)}
        >
          <FaPlus color='#E43434' size='1.1rem' />
        </button>
        {ShoppingAbout.quantity || 1}
        <button
          className='cursor-pointer'
          onClick={() => decreaseQuantity(ShoppingAbout.id)}
        >
          <FaMinus color='#E43434' size='1.1rem' />
        </button>
      </div>
    </div>
  );
}
