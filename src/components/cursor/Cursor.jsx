import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  // موضع الماوس
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // تخميد/تنعيم الحركة
  const smoothX = useSpring(x, { stiffness: 300, damping: 40, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 40, mass: 0.3 });

  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);

    // تكبير المؤشر لما نمر على رابط/زر
    const linkEnter = () => setHovering(true);
    const linkLeave = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    const clickables = document.querySelectorAll("a, button, [role='button']");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", linkEnter);
      el.addEventListener("mouseleave", linkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", linkEnter);
        el.removeEventListener("mouseleave", linkLeave);
      });
    };
  }, [x, y]);

  return (
    <motion.div
      className={`circle-cursor ${hidden ? "is-hidden" : ""} ${hovering ? "is-hovering" : ""}`}
      style={{ translateX: smoothX, translateY: smoothY }}
      aria-hidden="true"
    />
  );
}
