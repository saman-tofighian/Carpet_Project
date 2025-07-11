import { ProductData } from '@/Data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider3() {
  const filterData = ProductData.filter((item) => item.id >= 9 && item.id < 14);
  return (
    <section className='w-full mt-4 lg:mt-16 mb-24'>
      <div className='w-full px-[6%]'>
        <div className='w-full flex items-center md:justify-between'>
          <h2 className='font-bold text-2xl text-[#121212]'>فرش های مشابه</h2>
        </div>
        <div className='w-full mt-12'>
          <Swiper
            spaceBetween={33}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1450: { slidesPerView: 4 },
            }}
            className='mySwiper custom-pagination'
          >
            {filterData.map((val) => (
              <SwiperSlide
                key={val.id}
                className='border border-[#D9D9D9] rounded-[12px] p-4'
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: val.delay, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <figure className='w-full flex justify-center'>
                    <Image
                      src={val.image}
                      alt={val.alt}
                      width={255}
                      height={261}
                      className='w-auto h-auto'
                      priority={false}
                    />
                  </figure>
                  <div className='w-full px-6 md:px-0 lg:px-8 mt-6'>
                    <p className='font-medium text-[15px] md:text-[14px] md:text-nowrap lg:text-wrap lg:text-[18px] xl:text-[#121212] leading-8'>
                      {val.title}
                    </p>
                  </div>
                  <div className='w-full flex justify-between px-6 mt-8 items-center'>
                    <span className='text-[#121212] font-medium text-[16px] mt-0.5'>
                      قیمت :
                    </span>
                    <span className='text-[#121212] font-medium text-[18px] flex gap-x-1.5'>
                      {val.price.toLocaleString('fa', 'ir')}
                      <span>تومان</span>
                    </span>
                  </div>
                  <div className='w-full flex justify-center px-6 mt-10'>
                    <Link
                      href={`/products/${val.id}`}
                      className='text-[#CB1B1B] border border-[#CB1B1B] rounded-[12px] py-3 w-full text-center text-[15px] font-bold ease-linear duration-700 hover:text-white hover:bg-[#CB1B1B]'
                    >
                      مشاهده بیشتر
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider3;
