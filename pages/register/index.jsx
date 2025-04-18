import Form from '@/Components/SignUp/Form';
import Image from '@/Components/SignUp/Image';

export default function Register() {
  return (
    <section className='w-full mt-11'>
      <div className='grid grid-cols-12 py-12 px-[6%] gap-x-10'>
        <Form />
        <Image />
      </div>
    </section>
  );
}
