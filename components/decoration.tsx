"use client";

import { inertia } from "motion";
import * as motion from "motion/react-client";

export default function Decoration() {
  const bounceTransition = {
    y: {
      duration: 4.0,
      repeat: Infinity,
      ease: ["easeIn", "easeOut"],
    },
  };
  const bounceTransition2 = {
    y: {
      duration: 6.0,
      repeat: Infinity,
      ease: ["easeOut", "easeIn"],
    },
  };
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 50, 0] }}
        transition={bounceTransition}
        className="block w-48 h-48 bg-slate-900 absolute left-2 top-24 rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 50, 0] }}
        transition={bounceTransition}
        className="block w-28 h-28 bg-slate-900 absolute right-2 top-4 rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 50, 0] }}
        transition={bounceTransition}
        className="block w-20 h-20 bg-slate-900 absolute left-1/2 top-[500px] rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5, y: [0, 70, 0] }}
        transition={bounceTransition2}
        className="block absolute left-[30%] top-[140px] -z-10 w-[400px] h-[400px] bg-[url('/images/astronaut.png')] bg-repeat bg-left-top bg-cover"
      ></motion.span>
    </div>
  );
}
