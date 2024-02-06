import {Sora} from '@next/font/google'

const sora =Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800' ],
});

import { useRef, useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';
import About from '../pages/about';
import Services from '../pages/services';
import Work from '../pages/work';
import Portfolio from '../pages/testimonials';
import Contact from '../pages/contact';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {
  RiAlignBottom 
} from "react-icons/rx";

const Layout = ({ children }) => {
  const aboutRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const shouldShowAbout = window.scrollY > scrollThreshold;
      setShowAbout(shouldShowAbout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      scroll.scrollTo(aboutRef.current.offsetTop, {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div className={`about-page w-full h-screen overflow-y-auto bg-site text-white bg-cover bg-no-repeat font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      {showAbout && (
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          ref={aboutRef} 
          className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'
        >
          <About />
        </motion.div>
      )}
      <div className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'><About /></div>
      <div className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'><Services /></div>
      <div className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'><Work /></div>
      <div className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'><Portfolio /></div>
      <div className='bg-primary/30 h-screen border-white/35 border-solid border-4 rounded-lg p-4'><Contact /></div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="text-white text-4xl" onClick={scrollToAbout}>
          &#8595;
        </button>
      </div>
    </div>
  );
};

export default Layout;
