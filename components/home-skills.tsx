"use client";

import { animate, stagger } from "motion";
import { Chart } from "./chart";
import { motion, useAnimate, usePresence } from "motion/react";
import { useEffect } from "react";

export default function HomeSkills() {
  const effectsY = {
    offscreen: (index: number) => ({
      opacity: 0,
      y: index * 3,
    }),
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "linear",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="text-center">
      <motion.h3
        custom={-5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="inline-block text-6xl text-point-red"
      >
        My Skills
      </motion.h3>
      <motion.ul
        custom={5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="flex flex-wrap justify-evenly mt-24"
      >
        <li>
          <Chart />
        </li>
        <li>
          <Chart />
        </li>
        <li>
          <Chart />
        </li>
        <li>
          <Chart />
        </li>
      </motion.ul>
    </div>
  );
}
