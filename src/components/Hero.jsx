import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Teja</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I Develop Visually Stunning Websites, <br className='sm:block hidden'/> Code That Speaks to Users.</p>
        </div>
        
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center'>
        <a href='#about'>
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{y:[0, 24, 0]}}
              transition={{ duration: 1.5, repeat: Infinity, repeatType:'loop'}}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      <a href='https://drive.google.com/file/d/1WtHlahc8sDMk8-1cMPGr9uKg4-FOyGtf/view?usp=sharing' className='absolute top-80 left-56 border-b-2 underline-offset-2 hover:text-green-500'>View Resume</a>
    </section>
  )
}

export default Hero