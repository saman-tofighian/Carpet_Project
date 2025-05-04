import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaLock, FaPhone, FaRegUser, FaUser } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa6';
export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const [focusedField, setFocusedField] = useState('');

  const { firstName, lastName, email, password, phone } = formData;

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const registerHandler = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && phone) {
      setLoading(true);
      toast.success(`${firstName} عزیز ثبت نام شما با موفقیت ثبت شد`);
      setTimeout(() => {
        setLoading(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: '',
        });
      }, 3500);
      setTimeout(() => {
        router.push('/');
      }, 4500);
    } else {
      toast.error('تمام فیلد ها باید پر شوند!');
    }
  };

  const getLabelClass = (fieldName, value) => {
    return `absolute right-11 transition-all bg-white px-1 ${
      focusedField === fieldName || value
        ? 'top-[-13px] text-sm text-[#CB1B1B]'
        : 'top-1/2 -translate-y-1/2 text-base text-[#888]'
    }`;
  };

  return (
    <>
      <Toaster position='top-left' reverseOrder={false} />
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 px-10 bg-[#FFFFFF] lg:bg-transparent rounded-[20px] py-10 lg:py-0 shadow lg:shadow-none'
      >
        <div className='w-full flex justify-center flex-col mb-9 mt-7'>
          <h2 className='text-[#CB1B1B] font-bold mb-6 text-3xl text-center'>
            ایـــرانی فرش
          </h2>
          <h4 className='text-[#9E1515] font-bold text-2xl text-center'>
            ثبت نام
          </h4>
        </div>

        <form className='w-full flex flex-col justify-center gap-y-7'>
          {/* First Name */}
          <div className='relative w-full'>
            <input
              type='text'
              id='firstName'
              placeholder='نام'
              className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
              onFocus={() => setFocusedField('firstName')}
              onBlur={() => setFocusedField('')}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              value={firstName}
            />
            <label
              htmlFor='firstName'
              className={getLabelClass('firstName', firstName)}
            >
              نام
            </label>
            <FaUser className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
          </div>

          {/* Last Name */}
          <div className='relative w-full'>
            <input
              type='text'
              id='lastName'
              placeholder='نام خانوادگی'
              className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
              onFocus={() => setFocusedField('lastName')}
              onBlur={() => setFocusedField('')}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              value={lastName}
            />
            <label
              htmlFor='lastName'
              className={getLabelClass('lastName', lastName)}
            >
              نام خانوادگی
            </label>
            <FaRegUser className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
          </div>

          {/* Email */}
          <div className='relative w-full'>
            <input
              type='email'
              id='email'
              placeholder='ایمیل'
              className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={email}
            />
            <label htmlFor='email' className={getLabelClass('email', email)}>
              ایمیل
            </label>
            <FaEnvelope className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
          </div>

          {/* Password */}
          <div className='relative w-full'>
            <input
              type='password'
              id='password'
              placeholder='رمز عبور'
              className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField('')}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={password}
            />
            <label
              htmlFor='password'
              className={getLabelClass('password', password)}
            >
              رمز عبور
            </label>
            <FaLock className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
          </div>

          {/* Phone */}
          <div className='relative w-full'>
            <input
              type='tel'
              id='phone'
              placeholder='شماره موبایل'
              className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              value={phone}
            />
            <label htmlFor='phone' className={getLabelClass('phone', phone)}>
              شماره موبایل
            </label>
            <FaPhone className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
          </div>

          <button
            className='bg-[#CB1B1B] text-white py-3.5 rounded-[12px] text-[18px] font-bold cursor-pointer ease-linear duration-700 hover:bg-green-700 flex justify-center items-center gap-x-3'
            onClick={registerHandler}
          >
            ثبت نام
            {loading && <FaSpinner className='animate-spin' />}
          </button>

          <span className='font-medium text-[18px] md:text-[21px] text-black text-center'>
            حساب کاربری دارید؟{' '}
            <Link
              href='/login'
              className='text-[#CB1B1B] font-bold ease-linear duration-700 hover:text-green-700'
            >
              ورود
            </Link>{' '}
            کنید
          </span>
        </form>
      </motion.div>
    </>
  );
}
