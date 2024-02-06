import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';


const serviceData = [
  {
    icon: <RxReader />,
    title: 'Great Rankings',
    description: 'Make your business to be on top of search engine by outranking your competitors and get first-page ranking.',
  },
  {
    icon: <RxAccessibility />,
    title: 'Content Marketing',
    description: 'Apart from Google listings, it is the best way to leverage content marketing to get ranked in Chennai,India.',
  },
  {
    icon: <RxDesktop />,
    title: 'Social Media Marketing',
    description: 'We help you to increase the exposure of your business by tapping on the reach of best social media marketing.',
  },
  {
    icon: <RxCrop />,
    title: 'Brand Visibility',
    description: 'Your brand identity needs to reflect the vision of your organization and connect with customers globally .',
  },
  {
    icon: <RxPencil2 />,
    title: 'Best Digital Marketing',
    description: 'We are your one-stop solution provider for all your digital marketing requirements.',
  },
 
  {
    icon: <RxRocket />,
    title: 'SEO Experts',
    description: 'Drive greater traffic to your website with our proven result oriented SEO strategies even for highly competitive.',
  },
];

const ServiceSlider = () => {
  return (
  <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
   
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
  {
    serviceData.map((item,index) => {
      return <SwiperSlide key={index}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col 
        gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
          </div>
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
          </div>
        </div>
      </SwiperSlide>
    })
  }
  </Swiper>
  );
};

export default ServiceSlider;
