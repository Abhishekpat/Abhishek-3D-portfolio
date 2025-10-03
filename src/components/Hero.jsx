import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import TrueFocus from "./TrueFocus";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen md:h-screen mx-auto pt-16 md:pt-20">
      {/* Header Text - Higher z-index to appear above 3D model */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center justify-start text-center pt-4 sm:pt-6 md:pt-8`}
      >
        <div className="text-center">
          <h1 className="font-black text-white text-[32px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-tight mt-2">
            Hi, I'm <span className="text-[#915EFF]">Abhishek Patil</span>
          </h1>
          <div className="mt-3 sm:mt-4 flex justify-center px-4">
            <div className="w-full max-w-[90%] sm:max-w-none">
              <TrueFocus
                sentence="Full Stack Developer"
                manualMode={false}
                blurAmount={2}
                borderColor="#915EFF"
                animationDuration={1}
                pauseBetweenAnimations={0.7}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Computer Canvas */}
      <div className="absolute inset-0 top-[140px] xs:top-[160px] sm:top-[180px] md:top-[180px] lg:top-[120px] flex justify-center items-center z-10">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 xs:bottom-10 md:bottom-16 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className="w-[30px] h-[54px] xs:w-[35px] xs:h-[64px] rounded-3xl border-3 xs:border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
