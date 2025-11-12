import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";
import "./portfolio.scss";
import { h1 } from "motion/react-client";

const projects = [
  {
    id: 1,
    title: "Self Integration",
    description:
      "Self Integration هو موقع إلكتروني يعتمد على ووردبريس، مخصص للرفاه النفسي والسعادة الشخصية, يُقدّم الموقع خدمات التدريب والاستشارات التي تهدف إلى مساعدة الأفراد على تحقيق التوازن والانسجام الداخلي من خلال دعم متاح ومفعم بالرحمة.",
    image: "/portfolio1.png",
    link: "https://self-integretion.com/",
  },
  {
    id: 2,
    title: "atum for real estate",
    description:
      "Atum هو موقع إلكتروني يعتمد على ووردبريس، مخصص لتميز الخدمات العقارية ورضا العملاء.يُقدّم الموقع خدمات عقارية احترافية تهدف إلى مساعدة الأفراد في العثور على منازلهم المثالية واستثماراتهم الذكية من خلال إرشاد موثوق ودعم مخصص.",
    image: "/atum.png",
    link: "https://atum.sa/",
  },
  {
    id: 3,
    title: "Al-Dur almanthour",
    description:
      "Bright Smile Clinic هو موقع إلكتروني يعتمد على ووردبريس، مخصص لصحة الفم وابتسامات واثقة.يُقدّم الموقع رعاية أسنان احترافية وعلاجات تجميلية مصممة لمساعدة المرضى على تحقيق صحة فموية دائمة وابتسامات جميلة وصحية من خلال عناية لطيفة وشخصية.",
    image: "/aldur.png",
    link: "https://aldur-almanthour.sa/",
  },
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="img-container">
      <div ref={ref}>
        <img src={project.image} alt={project.title} />
      </div>
      <motion.div
        className="text-content"
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
          زيارة الموقع
        </a>
      </motion.div>
    </div>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="portfolio">
      {projects.map((p) => (
        <Image key={p.id} project={p} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
