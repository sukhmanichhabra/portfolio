
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/profile.jpeg";
import {motion} from "framer-motion"

const container= (delay) =>({
  hidden: {x :-100,opacity : 0},
  visible: {
x:0,
opacity:1,
transition:{duration:0.5 , delay: delay}

  }


})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
        {/* Left Section - Text */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
           
            
            
            className='text-5xl pb-6 font-thin tracking-tight lg:mt-16 lg:text-6xl'>
              Sukhmani Chhabra
            </motion.h1>
            {/* Added more space between h1 and span */}
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mt-8'>
              Full Stack Development
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-end'>
            <motion.img
            initial={{x:100 , opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:1.2}}
              src={profilePic}
              alt="profilePic"
              className='w-96 h-auto lg:w-[600px]' // Increased image size
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
