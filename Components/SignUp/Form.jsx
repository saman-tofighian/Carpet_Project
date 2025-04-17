export default function Form() {
  return (
    <div className='col-span-6 border'>
      <div className='w-full flex justify-center flex-col border'>
        <h2 className='text-[#CB1B1B] font-bold mb-6 text-3xl text-center'>
          ایـــرانی فرش
        </h2>
        <h4 className='text-[#9E1515] font-bold text-2xl text-center'>
          ثبت نام
        </h4>
      </div>
      <form className='w-full flex flex-col justify-center border'>
        <input
          type='text'
          className='w-full py-3 rounded-[12px] block border border-[#CBCBCB]'
        />
        <input
          type='text'
          className='w-full py-3 rounded-[12px] block border border-[#CBCBCB]'
        />
        <input
          type='text'
          className='w-full py-3 rounded-[12px] block border border-[#CBCBCB]'
        />
        <input
          type='text'
          className='w-full py-3 rounded-[12px] block border border-[#CBCBCB]'
        />
        <input
          type='number'
          className='w-full py-3 rounded-[12px] block border border-[#CBCBCB]'
        />
      </form>
    </div>
  );
}
