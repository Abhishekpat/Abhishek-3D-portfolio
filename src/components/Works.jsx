import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] xl:w-[360px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary/30 backdrop-blur-sm p-4 sm:p-5 rounded-2xl w-full h-full'
      >
        <div className='relative w-full h-[200px] sm:h-[220px] md:h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4 sm:mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] line-clamp-2'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[13px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {demo_link && (
          <div className='mt-4 sm:mt-5'>
            <button
              onClick={() => window.open(demo_link, "_blank")}
              className='w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-[13px] sm:text-[14px]
                bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20
                border border-cyan-400/30 text-white
                backdrop-blur-sm
                hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-teal-500/30
                hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20
                active:scale-95
                transition-all duration-300 ease-out
                flex items-center justify-center gap-2 group'
            >
              <span>Live Demo</span>
              <svg
                className='w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p className={`${styles.sectionSubText}`}>My </p>
        <h2 className={`${styles.sectionHeadText} break-words`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex px-4 sm:px-0'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[26px] sm:leading-[28px] md:leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-12 sm:mt-16 md:mt-20 flex flex-wrap gap-6 sm:gap-7 px-4 sm:px-0 justify-center sm:justify-start'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
