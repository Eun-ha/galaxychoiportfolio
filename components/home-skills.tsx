"use client";

import { animate, stagger } from "motion";
import { Chart } from "./chart";
import { motion } from "motion/react";
import { Opacity } from "@tsparticles/engine";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "linear",
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const data = [
    {
      color: 1,
      skills: 80,
      name: "HTML5",
      angle: 200,
    },
    {
      color: 2,
      skills: 70,
      name: "CSS3",
      angle: 300,
    },
    {
      color: 3,
      skills: 60,
      name: "React",
      angle: 270,
    },
    {
      color: 4,
      skills: 70,
      name: "Nextjs",
      angle: 230,
    },
    {
      color: 1,
      skills: 80,
      name: "HTML5",
      angle: 200,
    },
    {
      color: 2,
      skills: 70,
      name: "CSS3",
      angle: 300,
    },
    {
      color: 3,
      skills: 60,
      name: "React",
      angle: 270,
    },
    {
      color: 4,
      skills: 70,
      name: "Nextjs",
      angle: 230,
    },
  ];

  return (
    <div className="text-center">
      <motion.h3
        custom={-5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="inline-block text-4xl lg:text-6xl text-point-red"
      >
        My Skills
      </motion.h3>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-wrap justify-evenly mt-12 lg:mt-24"
      >
        {data.map((data, index) => (
          <motion.li className="mb-8" key={index} variants={listItem}>
            <Chart
              color={data.color}
              skills={data.skills}
              name={data.name}
              angle={data.angle}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
