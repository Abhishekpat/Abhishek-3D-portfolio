import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProfileCard from "./ProfileCard";
import { BallCanvas } from "./canvas";

// Filter to show only key technologies for better visual balance
const keyTechnologies = technologies.filter(tech => 
  ['React JS', 'JavaScript', 'TypeScript', 'Node JS', 'Three JS', 'MongoDB', 'Tailwind CSS'].includes(tech.name)
);

const About = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
      {/* Profile Card - Only in About Section */}
      <div className='w-full lg:w-1/3 flex justify-center lg:justify-end order-2 lg:order-2 px-4 sm:px-0'>
        <div className="w-full max-w-[400px] lg:max-w-none">
          <ProfileCard
            name="Abhishek Patil"
            title="Full Stack Developer"
            handle="Abhishek Patil"
            status="Available for Work"
            contactText="Resume"
            avatarUrl="/src/assets/image.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              window.open('/Abhishek_patil_resume.pdf', '_blank');
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='w-full lg:w-2/3 order-1 lg:order-1 px-4 sm:px-0'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} break-words`}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[26px] sm:leading-[28px] md:leading-[30px]'
        >
         Hi, I'm Abhishek Patil, a Computer Engineering student passionate about AI, Web technologies, and building scalable full-stack applications. I enjoy solving real-world problems through innovative tech solutions and creating impactful projects that bridge technology with society. Welcome to my portfolio, where I showcase my work, research, and journey in tech innovation
        </motion.p>

        {/* Tech Stack Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className='mt-10 sm:mt-12 md:mt-16'
        >
          <h3 className='text-white text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-6 sm:mb-8'>Tech Stack</h3>
          <div className='flex flex-row flex-wrap justify-start sm:justify-start gap-4 sm:gap-5 md:gap-6'>
            {keyTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className='w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20'
              >
                <BallCanvas icon={technology.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");