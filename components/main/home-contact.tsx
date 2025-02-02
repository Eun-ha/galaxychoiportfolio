"use client";
import { motion } from "motion/react";
import { effectsY } from "@/lib/motions";
import Form from "./Form";

export default function HomeContact() {
  return (
    <div className="text-center">
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
