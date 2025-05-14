import { useState } from 'react';

export default function ({ productAbout }) {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div className='col-span-12 xl:col-span-6 xl:px-3'>
      <h6 className='text-[#CB1B1B] font-bold text-[16px] hidden xl:flex'>
        فرش / {productAbout.category}
      </h6>
      <h4 className='text-[#121212] font-bold text-[18px] xl:text-[24px] mt-3 text-center xl:text-start'>
        {productAbout.title}
      </h4>
      <hr className='mt-6 text-[#ADADAD] rounded-[24px]' />
      <div className='w-full flex mt-6 gap-5'>
        <span className='text-[#000000] font-medium text-[18px]'>
          اندازه فرش :
        </span>
        <span className='text-[#000000] font-medium text-[18px]'>
          شش متری ( ۳۰۰ * ۲۰۰ )
        </span>
      </div>
      <div className='w-full mt-8 xl:mt-9'>
        <h6 className='text-[#000000] font-medium text-[18px]'>ویژگی ها</h6>
        <div className='w-full grid grid-cols-12 mt-6 gap-x-6 gap-y-8 xl:gap-x-8'>
          <div className='col-span-6 sm:col-span-5 sm:col-start-2 md:col-span-4 md:col-start-3 lg:col-span-3 lg:col-start-4 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
            <h6 className='text-[14px] text-[#353535] font-medium'>
              کیفیت فرش
            </h6>
            <h6 className='text-[16px] text-[#121212] font-medium mt-2.5'>
              درجه یک
            </h6>
          </div>
          <div className='col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
            <h6 className='text-[14px] text-[#353535] font-medium'>
              رنگ زمینه
            </h6>
            <h6 className='text-[16px] text-[#121212] font-medium mt-2.5'>
              آبی
            </h6>
          </div>
          {showFeatures && (
            <>
              <div className='col-span-6 sm:col-span-5 sm:col-start-2 md:col-span-4 md:col-start-3 lg:col-span-3 lg:col-start-4 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
                <h6 className='text-[14px] text-[#353535] font-medium'>شکل</h6>
                <h6 className='text-[16px] text-[#121212] font-medium mt-2.5'>
                  مستطیل
                </h6>
              </div>
              <div className='col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
                <h6 className='text-[14px] text-[#353535] font-medium'>
                  جنس نخ پود
                </h6>
                <h6 className='text-[16px] text-[#121212] font-medium mt-2.5'>
                  پلی استر و پنبه
                </h6>
              </div>
              <div className='col-span-6 sm:col-span-5 sm:col-start-2 md:col-span-4 md:col-start-3 lg:col-span-3 lg:col-start-4 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
                <h6 className='text-[14px] text-[#353535] font-medium'>
                  جنس نخ تار
                </h6>
                <h6 className='text-[16px] text-[#121212] font-medium mt-2.5'>
                  پلی استر و پنبه
                </h6>
              </div>
              <div className='col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-6 bg-[#EDEDED] p-3.5 rounded-[8px]'>
                <h6 className='text-[14px] text-[#353535] font-medium'>
                  جنس نخ خاب
                </h6>
                <h6 className='text-[14px] md:text-[16px] text-[#121212] font-medium mt-2.5'>
                  اکلیریک هیت ست شده
                </h6>
              </div>
            </>
          )}
          <div className='col-span-12 p-3.5 rounded-[8px] flex justify-center mt-2 xl:mt-5'>
            <button
              className='text-[#CB1B1B] border border-[#CB1B1B] px-5 py-3 rounded-[12px] cursor-pointer duration-700 ease-linear hover:bg-[#cb1b1b] hover:text-white'
              onClick={() => setShowFeatures(!showFeatures)}
            >
              {!showFeatures ? 'مشاهده همه ویژگی ها' : 'بستن همه ویژگی ها'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
