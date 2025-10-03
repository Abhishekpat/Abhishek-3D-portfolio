import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: isHovered
          ? "0 0 30px rgba(145, 94, 255, 0.4), 0 0 60px rgba(125, 249, 255, 0.2)"
          : "0 3px 0 #232631",
        border: isHovered ? "2px solid rgba(145, 94, 255, 0.5)" : "2px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
      }}
      contentArrowStyle={{
        borderRight: isHovered
          ? "7px solid rgba(145, 94, 255, 0.8)"
          : "7px solid #232631",
        transition: "all 0.3s ease"
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: isHovered
          ? "0 0 20px rgba(145, 94, 255, 0.6)"
          : "0 0 0 4px #1d1836",
        transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            style={{
              filter: isHovered ? "brightness(1.2)" : "brightness(1)",
              transition: "filter 0.3s ease"
            }}
          />
        </div>
      }
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundImage: isHovered
            ? "linear-gradient(135deg, rgba(145, 94, 255, 0.1) 0%, transparent 50%, rgba(125, 249, 255, 0.1) 100%)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          padding: "1px",
          borderRadius: "inherit",
        }}
      >
        <motion.div
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.h3
            className='text-white text-[24px] font-bold'
            animate={{
              color: isHovered ? "#7df9ff" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
          >
            {experience.title}
          </motion.h3>
          <motion.p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
            animate={{
              color: isHovered ? "#915EFF" : "#aaa6c3",
            }}
            transition={{ duration: 0.3 }}
          >
            {experience.company_name}
          </motion.p>
        </motion.div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
              initial={{ opacity: 0.9, x: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.9,
                x: isHovered ? 4 : 0,
              }}
              transition={{
                duration: 0.2,
                delay: isHovered ? index * 0.05 : 0
              }}
            >
              {point}
            </motion.li>
          ))}
        </ul>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(145, 94, 255, 0.15) 0%, transparent 50%)",
              pointerEvents: "none",
              borderRadius: "inherit",
            }}
          />
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
