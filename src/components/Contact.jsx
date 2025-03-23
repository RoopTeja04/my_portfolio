import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Import your icons here
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-lg text-gray-400" />
            <a 
              href="mailto:roopteja112@gmail.com" 
              className="text-gray-200 hover:text-blue-500 transition duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              roopteja112@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-lg text-gray-400" />
            <a 
              href="https://www.linkedin.com/in/roop-teja-g-796013299/" 
              className="text-gray-200 hover:text-blue-500 transition duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Roop Teja G
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-lg text-gray-400" />
            <a 
              href="https://github.com/RoopTeja04" 
              className="text-gray-200 hover:text-blue-500 transition duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Roop Teja
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
