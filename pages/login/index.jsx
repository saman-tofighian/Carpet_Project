import Form from '@/Components/SignIn/Form';
import Image from '@/Components/SignIn/Image';

export default function Login() {
  return (
    <section className='w-full mt-11'>
      <div className='grid grid-cols-12 py-12 px-[6%] gap-x-10'>
        <Form />
        <Image />
      </div>
    </section>
  );
}
