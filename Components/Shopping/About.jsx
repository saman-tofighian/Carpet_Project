import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext ';

export default function About({ ShoppingAbout }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const quantity = ShoppingAbout.quantity || 1;
  const finalPrice = ShoppingAbout.price * quantity;

  return (
    <div className='col-span-12 xl:col-span-8 mt-2'>
      <h5 className='font-bold text-[16px] sm:text-[18px] md:text-[18px] text-[#121212]'>
        {ShoppingAbout.title}
      </h5>

      <span className='block mt-4 text-[#121212] font-medium'>رنگ : آبی</span>
      <span className='block mt-4 text-[#121212] font-medium'>
        شرکت فرش سهند
      </span>

      {/* قیمت واحد */}
      <span className='block mt-4 text-[#121212] font-medium '>
        قیمت واحد : {ShoppingAbout.price.toLocaleString('fa-IR')} تومان
      </span>

      {/* قیمت نهایی */}
      <span className='block mt-2 text-[#121212] font-bold text-[17px]'>
        قیمت نهایی : {finalPrice.toLocaleString('fa-IR')} تومان
      </span>

      {/* کنترل تعداد */}
      <div className='py-1.5 px-2 border border-[#ADADAD] rounded-[8px] w-[180px] h-[50px] mt-6 flex items-center justify-around text-[#000000] text-[19px]'>
        <button
          className='cursor-pointer'
          onClick={() =>
            quantity > 1
              ? decreaseQuantity(ShoppingAbout.id)
              : removeFromCart(ShoppingAbout.id)
          }
          title={quantity > 1 ? 'کاهش تعداد' : 'حذف محصول'}
        >
          {quantity > 1 ? (
            <FaMinus color='#E43434' size='1.1rem' />
          ) : (
            <FaTrash color='#E43434' size='1.1rem' />
          )}
        </button>

        <span>{quantity}</span>

        <button
          className='cursor-pointer'
          onClick={() => increaseQuantity(ShoppingAbout.id)}
        >
          <FaPlus color='#E43434' size='1.1rem' />
        </button>
      </div>
    </div>
  );
}
