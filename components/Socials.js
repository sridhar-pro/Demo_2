import Link from 'next/link';

import {RiYoutubeLine, RiTwitterLine, RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, } from 'react-icons/ri'

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg '>
   {/* <Link href={''} className='hover:text-accent transition-all duration-300 text-2xl'>
    <RiYoutubeLine />
   </Link> */}
   <Link href={''} className='hover:text-accent transition-all duration-300 text-2xl'>
    <RiInstagramLine />
   </Link>
   <Link href={''} className='hover:text-accent transition-all duration-300 text-2xl'>
    <RiFacebookLine />
   </Link>
   <Link href={''} className='hover:text-accent transition-all duration-300 text-2xl'>
    <RiTwitterLine />
   </Link>
   <Link href={''} className='hover:text-accent transition-all duration-300 text-2xl'>
    <RiLinkedinLine />
   </Link>
   {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDribbbleLine />
   </Link>
   <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiBehanceLine/>
   </Link>
   <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiPinterestLine/>
   </Link> */}
  </div>
  );
};

export default Socials;
