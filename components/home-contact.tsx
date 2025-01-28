"use client";
import { motion } from "motion/react";
import Form from "./Form";

export default function HomeContact() {
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
    <div className="h-[800px] text-center">
      <motion.h3
        custom={-5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="inline-block text-xl text-point-red"
      >
        Contact Me!
      </motion.h3>
      <motion.div
        custom={5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="mt-12 lg:mt-24"
      >
        <Form />
      </motion.div>
    </div>
  );
}
