export default function Image({ ShoppingImage }) {
  return (
    <figure className='col-span-12 xl:col-span-4 flex justify-center'>
      <img
        src={ShoppingImage}
        alt='p1'
        className='xl:w-[250px] xl:h-[234px] '
      />
    </figure>
  );
}
