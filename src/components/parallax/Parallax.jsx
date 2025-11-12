import { React, useRef } from "react";
import "./parallax.scss";
import { motion, useTransform, useScroll } from "motion/react";

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "مهاراتي" : "مشاريعي?"}
      </motion.h1>
      <div className="mountains" />
      <motion.div className="plants" style={{ y: yBg }} />
      <motion.div className="stars" style={{ x: yText }} />
    </div>
  );
}

export default Parallax;
