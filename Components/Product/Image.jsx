export default function Image({ productImage }) {
  return (
    <figure className='col-span-12 md:col-start-2 lg:col-start-4 xl:col-span-6 flex flex-wrap'>
      <div className='w-full'>
        <img
          src={productImage.image}
          alt={productImage.title}
          className='h-[400px] sm:h-[500px] md:h-[540px] rounded-[8px]'
        />
      </div>
      <div className='w-full gap-x-8 mt-12 px-8 hidden xl:flex'>
        <figure className='rounded-[8px] w-[100px] h-[100px] border border-[#CBCBCB] p-2.5'>
          <img
            src='/p8.png'
            alt='p1'
            className='w-[80px] h-[80px] rounded-[4px] cursor-pointer'
          />
        </figure>
        <figure className='rounded-[8px] w-[100px] h-[100px] border border-[#CBCBCB] p-2.5'>
          <img
            src='/p2.png'
            alt='p2'
            className='w-[80px] h-[80px] rounded-[4px] cursor-pointer'
          />
        </figure>
        <figure className='rounded-[8px] w-[100px] h-[100px] border border-[#CBCBCB] p-2.5'>
          <img
            src='/p3.png'
            alt='p3'
            className='w-[80px] h-[80px] rounded-[4px] cursor-pointer'
          />
        </figure>
        <figure className='rounded-[8px] w-[100px] h-[100px] border border-[#CBCBCB] p-2.5'>
          <img
            src='/p4.png'
            alt='p4'
            className='w-[80px] h-[80px] rounded-[4px] cursor-pointer'
          />
        </figure>
      </div>
    </figure>
  );
}
