import { FaMinus, FaPlus } from 'react-icons/fa6';
export default function About() {
  return (
    <div className='col-span-12 xl:col-span-8 mt-2'>
      <h5 className='font-bold text-[16px] sm:text-[18px] md:text-[20px] text-[#121212]'>
        فرش ماشینی ماهساره طرح آترینا زمینه آبی
      </h5>
      <span className='block mt-4 text-[#121212] font-medium'>رنگ : آبی</span>
      <span className='block mt-4 text-[#121212] font-medium'>
        شرکت فرش سهند
      </span>
      <span className='block mt-4 text-[#121212] font-medium '>
        قیمت : ۱۳/۵۰۰/۰۰۰
      </span>
      <div className='py-1.5 px-2 border border-[#ADADAD] rounded-[8px] w-[150px] h-[50px] mt-6 flex items-center justify-around text-[#000000] text-[19px]'>
        <button className='cursor-pointer'>
          <FaPlus color='#E43434' size='1.1rem' />
        </button>
        1
        <button className='cursor-pointer'>
          <FaMinus color='#E43434' size='1.1rem' />
        </button>
      </div>
    </div>
  );
}
