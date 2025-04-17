export default function Image() {
  return (
    <figure className='col-span-5 relative border'>
      <div className='relative w-[600px] h-[700px] rounded-[48px] overflow-hidden'>
        <img
          src='./si.png'
          alt='signup_image'
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00000000] to-[#1f2161c5] opacity-80'></div>
      </div>
    </figure>
  );
}
