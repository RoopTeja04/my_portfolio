import React from 'react';
import { Tilt }  from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs: w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45, scale:1, speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdution</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate and dedicated front-end developer with a solid foundation in HTML, CSS, and JavaScript. 
        My journey into web development began with a fascination for creating visually appealing and user-friendly websites. 
        Over the past year, I have honed my skills by working on various personal projects, 
        where I utilized frameworks like React.js to build dynamic, responsive applications.
        I'm quick learner and collaborate closely with team to create efficient, scalable & user-friendly solutions
        to solve real-world problems.
        Let us collaborate to realize your vision.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");