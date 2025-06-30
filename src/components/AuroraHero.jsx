import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import "./AuroraHero.css";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = ({ position = "top" }) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Set gradient origin based on prop
  const origin = {
    top: "50% 0%",
    bottom: "50% 100%",
    left: "0% 50%",
    right: "100% 50%",
    center: "50% 50%",
  }[position] || "50% 0%";

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at ${origin}, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="aurora-hero"
    >
      <div className="stars-container">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
