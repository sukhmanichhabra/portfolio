import { HERO_CONTENT } from '../constants';

// Use this if assets is parallel to components folder
import profilePic from '../assets/Profile.jpeg'


import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:mb-20'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
        {/* Left Section - Text */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='text-5xl font-thin tracking-tight text-white lg:text-6xl pb-4' // Added more padding
            >
              Sukhmani Chhabra
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent mt-4 mb-6' // Added top and bottom margin
            >
              Full Stack Development
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='max-w-xl text-lg font-light tracking-wider leading-relaxed text-gray-300 mt-4' // Added top margin
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-end'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile"
              className='w-80 h-auto lg:w-[500px] rounded-2xl shadow-xl border-4 border-gray-800'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
