import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
export default function Footer() {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#f9f9f9'
          fill-opacity='1'
          d='M0,128L34.3,149.3C68.6,171,137,213,206,224C274.3,235,343,213,411,181.3C480,149,549,107,617,74.7C685.7,43,754,21,823,42.7C891.4,64,960,128,1029,176C1097.1,224,1166,256,1234,229.3C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
        ></path>
      </svg>
      <footer className='bg-[#F9F9F9] w-full'>
        <section className='gap-y-12 xl:gap-x-16 xl:gap-y-0 grid grid-cols-12 px-[6%] py-7 w-full'>
          <div className='order-4 xl:order-1 col-span-12 xl:col-span-5'>
            <h4 className='font-bold text-[#CB1B1B] text-2xl'>ایـــرانی فرش</h4>
            <p className='mt-5 font-medium text-[16px] leading-9'>
              با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع و
              با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از فروش
              حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش یک
              خرید آسان و لذت بخش را تجربه کنید.
            </p>
          </div>
          <div className='order-1 xl:order-2 col-span-6 sm:col-span-4 xl:col-span-2'>
            <ul className='flex flex-col w-full text-[#505050] text-[16px]'>
              <h5 className='font-bold'>فرش های دست بافت</h5>
              <li className='mt-7 font-medium texy-[#717171]'>لوکس</li>
              <li className='mt-5 font-medium texy-[#717171]'>قدیمی</li>
              <li className='mt-5 font-medium texy-[#717171]'>مدرن</li>
            </ul>
          </div>
          <div className='order-2 xl:order-3 col-span-6 sm:col-span-4 xl:col-span-2'>
            <ul className='flex flex-col w-full text-[#505050] text-[16px]'>
              <h5 className='font-bold'>فرش های ماشینی</h5>
              <li className='mt-7 font-medium texy-[#717171]'>لوکس</li>
              <li className='mt-5 font-medium texy-[#717171]'>قدیمی</li>
              <li className='mt-5 font-medium texy-[#717171]'>مدرن</li>
            </ul>
          </div>
          <div className='order-3 xl:order-4 col-span-6 sm:col-span-4 xl:col-span-2'>
            <ul className='flex flex-col w-full text-[#505050] text-[16px]'>
              <h5 className='font-bold'>سایر فرش ها</h5>
              <li className='mt-7 font-medium texy-[#717171]'>لوکس</li>
              <li className='mt-5 font-medium texy-[#717171]'>قدیمی</li>
              <li className='mt-5 font-medium texy-[#717171]'>مدرن</li>
            </ul>
          </div>
          <div className='order-5 col-span-12 xl:col-span-4 mt-8'>
            <div className='flex justify-around xl:justify-between w-full'>
              <div className='flex flex-col'>
                <span className='font-medium text-[#505050] text-[18px] md:text-[20px]'>
                  تلفن پشتیبانی : 0212544
                </span>
                <div className='flex gap-x-6 mt-7'>
                  <Link
                    href='https://www.linkedin.com/in/saman-tofighian/'
                    target='_blank'
                    className='text-blue-500'
                    title='linkedin_SamanTofighian'
                  >
                    <FaLinkedin size='2rem' />
                  </Link>
                  <Link
                    href='https://github.com/saman-tofighian'
                    target='_blank'
                    className='text-black'
                    title='github_SamanTofighian'
                  >
                    <FaGithub size='2rem' />
                  </Link>
                </div>
              </div>
              <figure>
                <img src='./en.png' alt='enamad' />
              </figure>
            </div>
          </div>
          <div className='flex justify-center order-6 col-span-12 mt-8'>
            <h3 className='text-[#505050] text-[1.2rem]'>
              ساخته شده توسط{' '}
              <strong className='text-[#CB1B1B]'>سامان توفیقیان</strong>
            </h3>
          </div>
        </section>
      </footer>
    </>
  );
}
