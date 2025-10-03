import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import RollingGallery from "./RollingGallery";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100/20 backdrop-blur-sm rounded-[20px]`}>
      <div
        className={`bg-tertiary/20 backdrop-blur-sm rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Journey</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievements");
