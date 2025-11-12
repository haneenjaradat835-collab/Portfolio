import React from "react";
import * as motion from "motion/react-client";
import "./hero.scss";
// import programmer from "../../../../../../programmer.png";

function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",

      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  return (
    <motion.div className="hero">
      <motion.div
        className="imgContainer"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="/programmer.png" alt="programmer" />
      </motion.div>
      <motion.div
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h3 variants={textVariants}>مهندسة حاسوب</motion.h3>
        <motion.h1 variants={textVariants}>حنين جرادات</motion.h1>

        <motion.p variants={textVariants}>
          حنين جرادات — مصممة ومطوّرة واجهات أمامية أُحوّل الأفكار إلى مواقع
          تفاعلية أنيقة وسريعة باستخدام React وWordPress.
        </motion.p>
        <motion.div variants={textVariants} className="buttonBar">
          {/* <button>more</button>
          <button>contact</button> */}
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <span>Haneen Jaradat</span>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
