import Form from '@/Components/SignIn/Form';
import Image from '@/Components/SignUp/Image';
export default function Login() {
  return (
    <section className='w-full mt-6 lg:mt-11'>
      <div className='grid grid-cols-12 py-12 px-[6%] lg:gap-x-10 gap-y-10 lg:gap-y-0'>
        <Form />
        <Image />
      </div>
    </section>
  );
}
