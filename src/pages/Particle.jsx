import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const Particle = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring
  const springX = useSpring(mouseX, { stiffness: 700, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 700, damping: 35 });

  // Pulsing scale
  const scale = useTransform(mouseX, [0, window.innerWidth], [1, 1.5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 md:w-4 md:h-4 rounded-full pointer-events-none z-50"
      style={{
        translateX: springX,
        translateY: springY,
        scale: scale,
        background: "radial-gradient(circle, #9333ea, #4c1d95)",
        boxShadow: "0 0 8px rgba(147, 51, 234, 0.8), 0 0 16px rgba(147, 51, 234, 0.6)",
      }}
    />
  );
};

export default Particle;
