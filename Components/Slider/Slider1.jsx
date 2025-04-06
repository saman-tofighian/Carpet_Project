import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slider1() {
    return ( 
        <section className="w-full mt-32">
            <div className="w-full px-[4%]">
                <div className="w-full flex items-center justify-between">
                    <h3 className="font-bold text-2xl text-[#121212]">فرش های دستبافت</h3>
                    <Link href='/' className="py-3 px-5 bg-transparent border border-[#CB1B1B] text-[#CB1B1B] rounded-[12px] flex justify-center items-center text-center gap-x-3 me-32 ease-linear duration-700 hover:bg-[#CB1B1B] hover:text-white">
                        مشاهده  همه
                        <FaArrowLeft />
                    </Link>
                </div>
                <div className="w-full mt-12">
                <Swiper spaceBetween={30} slidesPerView={4}>
                    <SwiperSlide className="border border-[#D9D9D9] rounded-[12px] p-4">
                        <figure className="w-full flex justify-center">
                            <img src="./slider1.png" alt="picSlider1" className="w-[255px] h-[261px]" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#D9D9D9] rounded-[12px] p-4">
                    <figure className="w-full flex justify-center">
                            <img src="./slider2.png" alt="picSlider2" className="w-[255px] h-[261px]" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#D9D9D9] rounded-[12px] p-4">
                    <figure className="w-full flex justify-center">
                            <img src="./slider3.png" alt="picSlider3" className="w-[255px] h-[261px]" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#D9D9D9] rounded-[12px] p-4">
                    <figure className="w-full flex justify-center">
                            <img src="./slider4.png" alt="picSlider4" className="w-[255px] h-[261px]" />
                        </figure>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </section>
     );
}

export default Slider1;