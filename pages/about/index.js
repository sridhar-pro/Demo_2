import React, {useState , forwardRef} from "react";

// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaWordpress,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";

import {
  RxActivityLog
} from "react-icons/rx";


const aboutData = [
  {
    title: 'Best Digital Marketing Company in Chennai',
    info: [
      {
        title: 'Small businesses should consider the huge marketplace of prospects online. No small business, no matter how new, should overlook this vast marketplace.',
        
      },
      {
        title: 'The ability to reach a global marketplace and the ability to interact with your prospects can be done only with the best Digital Marketing strategies.',
        
      },
      {
        title: 'Analysis of what exactly they are looking for should be known very well to get more profitable results for your product.',
        
      },
    ],
  },
  {
    title: 'Digital Marketing Agency in Chennai',
    info: [
      {
        title: 'Digital Marketing is the greatest tool to market your products or services in a digital platform and to make your business the biggest hit.',
       
      },
      {
        title: 'Marketing has always been about connecting with your audience in the right place and at the right time.',
        
      },
      {
        title: 'Properly planned and well-targeted digital marketing campaign can reach the right customers at a much lower cost than traditional marketing methods.',
       
      },
    ],
  },
  {
    title: 'Why hunger for Digital Marketing?',
    info: [
      {
        title: 'A team of the best digital marketers is present to have a clear picture of how each asset or tactics work and helps you to reach your goals in a short period of time.',
               
      },
      {
        title: 'Digital Marketing is an action carried out by the use of numerous digital tactics and channels to connect with customers which in turn helps towards the promotion of your goods and services.',
      
      },
      {
        title: 'Most purchasing decisions are taken online, which gradually creates more hunger for digital marketing.',
        
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


import CountUp from 'react-countup';

import { CheckCircleIcon } from '@heroicons/react/solid';
import { ArrowDownIcon } from '@heroicons/react/solid';



const About = forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div id="about">
  <div className="min-h-screen flex flex-col justify-center items-center">
  <div className="h-full bg-transparent/5 py-24 flex items-center">
    <Circles />
    {/* <motion.div 
    variants= {fadeIn('right', 0.2)}
    initial= 'hidden'
    animate= 'show'
    exit= 'hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
         variants= {fadeIn('right', 0.2)}
         initial= 'hidden'
         animate= 'show'
         exit= 'hidden'
         className="h2"> 
          Why We Are <span className="text-accent">Best</span> Digital agency
        </motion.h2>
        <motion.p 
         variants= {fadeIn('right', 0.4)}
         initial= 'hidden'
         animate= 'show'
         exit= 'hidden'
         className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        Weboin is the best platform to bring your product on top of this digital world. We have everything that you need to take your business idea alive, and you can watch your website turn into a profitable online business.
        </motion.p>

      <motion.div 
        variants= {fadeIn('right', 0.6)}
        initial= 'hidden'
        animate= 'show'
        exit= 'hidden'
       className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
      <div className="flex flex-1 xl:gap-x-6">
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={10} duration={5} />+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Years of experience
          </div>
          </div>
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={250} duration={5} />+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Satisfied Clients
          </div>
          </div>
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={650} duration={5} />+
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Finished Projects
          </div>
        </div>
      </div>
    </motion.div>    
    </div>
      <motion.div 
       variants= {fadeIn('right', 0.4)}
       initial= 'hidden'
       animate= 'show'
       exit= 'hidden'
       className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
      <div className="flex gap-x-4 xl:gap-x-8 font-serif mx-auto xl:mx-0 mb-4">
        {aboutData.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
            after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>{item.title}</div>
          )
        })}
      </div>
      <div  className="bg-violet-400/10 py-2 xl:py-8 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-t-md rounded-b-md">
        {aboutData[index].info.map((item, itemIndex) =>{
          return (
            <div key={itemIndex} className="bg-violet-400/100 p-4 rounded-t-md rounded-b-md shadow-md w-auto">
            <RxActivityLog className="h-6 w-6 text-black/100" />
            <span className="font-bold text-md ml-2">{item.title}</span>
            </div>
          )
        })}
      </div>
      </motion.div>
    </div>
  </div>
  </div>
  </div>
  );
});

export default About;
