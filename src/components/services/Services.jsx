import { React, useRef } from "react";
import "./services.scss";
import { motion, useTransform, useInView } from "motion/react";

function Services() {
  const enterVariants = {
    initial: {
      x: -500,
      opacity: 0,
      y: 100,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        straggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={enterVariants}
      initial="initial"
      animate="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      {/* <motion.div className="textContainer" variants={enterVariants}>
        fdgfdhdfnfgtn
      </motion.div> */}
      <motion.div className="tiltleContainer" variants={enterVariants}>
        <motion.h2 whileHover={{ color: "#61408f" }}>
          أهم <span>مهاراتي</span>
        </motion.h2>
      </motion.div>
      <motion.div className="listContainer" variants={enterVariants}>
        <div className="box">
          <img src="./wordpress.svg" alt="" />
          <h3>Wordpress</h3>
          <p>
            Custom WordPress websites built with speed, security, and
            flexibility to match your brand and business goals.
          </p>
          {/* <button type="button">contact me</button> */}
        </div>
        <div className="box">
          <img src="./react.svg" alt="" />
          <h3>React مشاريع</h3>
          <p>
            Modern, scalable React applications designed for performance,
            interactivity, and seamless user experiences.
          </p>
          {/* <button type="button">contact me</button> */}
        </div>
        <div className="box">
          <img src="./seo.svg" alt="" />
          <h3>خدمات السيو</h3>
          <p>
            Boost your online visibility with advanced SEO strategies that drive
            traffic, improve rankings, and grow your audience.
          </p>
          {/* <button type="button">contact me</button> */}
        </div>
        <div className="box">
          <img src="./marketing.svg" alt="" />
          <h3>خدمات التسويق</h3>
          <p>
            Comprehensive digital marketing solutions including campaigns,
            branding, and strategies to connect with your target customers.
          </p>
          {/* <button type="button">contact me</button> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
