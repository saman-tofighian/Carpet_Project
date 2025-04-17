import Form from '@/Components/SignUp/Form';
import Image from '@/Components/SignUp/Image';

export default function Register() {
  return (
    <section className='w-full mt-11'>
      <div className='w-full grid grid-cols-12 py-12 px-[6%] place-items-center border'>
        <Form />
        <Image />
      </div>
    </section>
  );
}
