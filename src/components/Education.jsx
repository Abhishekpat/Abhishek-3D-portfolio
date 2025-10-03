import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SpotlightCard from "./SpotlightCard";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Engineering",
    institution: "Shah and Anchor Engineering College, Mumbai",
    period: "2024 – 2027",
    grade: "CGPA: 9.05/10",
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    institution: "Vidyalankar Polytechnic, Mumbai",
    period: "2021 – 2024",
    grade: "Percentage: 93%",
  },
];

const EducationCard = ({ degree, field, institution, period, grade, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <SpotlightCard
        className="p-6 rounded-2xl min-h-[280px] flex flex-col justify-between border border-[#915eff]/100"
        spotlightColor="rgba(145, 94, 255, 0.25)"
      >
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white font-bold text-[24px] mb-1">
                {degree}
              </h3>
              <p className="text-[#915eff] text-[18px] font-semibold">
                {field}
              </p>
            </div>
            <div className="ml-4 bg-tertiary/40 backdrop-blur-sm px-3 py-1 rounded-lg">
              <p className="text-white text-[14px] font-medium">{period}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#915eff] " ></div>
              <p className="text-secondary text-[16px]">{institution}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#915eff]"></div>
              <p className="text-white text-[16px] font-medium">{grade}</p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My educational background in Computer Engineering has provided me with
          a strong foundation in software development, algorithms, and system
          design. Through rigorous coursework and practical projects, I've
          developed the skills necessary to tackle complex technical challenges.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {educationData.map((education, index) => (
          <div key={`education-${index}`} className="w-full sm:w-[calc(50%-14px)]">
            <EducationCard index={index} {...education} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
