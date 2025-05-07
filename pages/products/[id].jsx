import About from '@/Components/Product/About';
import Image from '@/Components/Product/Image';
import Seller from '@/Components/Product/Seller';
const products = [
  {
    id: '1',
    title: 'فرش ماشینی ماهساره طرح آترینا زمینه آبی',
    price: '۱۳/۵۰۰/۰۰۰ تومان',
    image: '/slider1.webp',
    alt: 'picSlider5',
    size: 'شش متری ( ۳۰۰ * ۲۰۰ )',
    features: [
      { title: 'کیفیت فرش', value: 'درجه یک' },
      { title: 'رنگ زمینه', value: 'آبی' },
      { title: 'شکل', value: 'مستطیل' },
      { title: 'جنس نخ پود', value: 'پلی استر و پنبه' },
      { title: 'جنس نخ تار', value: 'پلی استر و پنبه' },
      { title: 'جنس نخ خاب', value: 'اکلیریک هیت ست شده' },
    ],
    seller: {
      name: 'شرکت فرش سهند',
      performance: 'عملکرد عالی',
      rating: '۴.۶',
    },
  },
  {
    id: '2',
    title: 'فرش ماشینی طرح افشان',
    price: '۸/۴۰۰/۰۰۰ تومان',
    image: '/slider2.webp',
    alt: 'picSlider2',
    size: 'نه متری ( ۳۵۰ * ۲۵۰ )',
    features: [
      { title: 'کیفیت فرش', value: 'درجه یک' },
      { title: 'رنگ زمینه', value: 'کرم' },
      { title: 'شکل', value: 'مستطیل' },
      { title: 'جنس نخ پود', value: 'پلی استر' },
      { title: 'جنس نخ تار', value: 'پنبه' },
      { title: 'جنس نخ خاب', value: 'اکریلیک' },
    ],
    seller: {
      name: 'فرش نگین مشهد',
      performance: 'عملکرد خوب',
      rating: '۴.۳',
    },
  },
];

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((item) => item.id === params.id);

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return (
    <section className='w-full grid grid-cols-12 gap-y-14 xl:gap-y-0'>
      <Image image={product.image} />
      <About
        title={product.title}
        size={product.size}
        features={product.features}
      />
      <Seller seller={product.seller} price={product.price} />
    </section>
  );
}
