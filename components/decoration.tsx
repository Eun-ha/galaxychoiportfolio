"use client";

import GithubIcon from "@/icons/githubIcon";
import Html5Icon from "@/icons/html5Icon";
import JavascriptIcon from "@/icons/javascriptIcon";
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

  const fadeIn = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "linear",
        duration: 5.0,
      },
    },
  };
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 50, 0] }}
        transition={bounceTransition}
        className="block w-48 h-48 bg-zinc-900 absolute left-2 top-10 lg:top-24 rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 70, 0] }}
        transition={bounceTransition}
        className="block w-28 h-28 bg-zinc-900 absolute right-2 top-2 lg:top-4 rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, 50, 0] }}
        transition={bounceTransition}
        className="block w-20 h-20 bg-zinc-900 absolute left-1/2 top-[500px] rounded-full -z-10"
      ></motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 70, 0] }}
        transition={bounceTransition2}
        className="block absolute left-[10%] lg:left-[30%] top-[140px] -z-10 w-[400px] h-[400px] bg-[url('/images/astronaut.png')] bg-repeat bg-left-top bg-cover"
      ></motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute right-24 top-1/4 mt-[300px] -z-10 -rotate-12"
      >
        <JavascriptIcon />
      </motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute -left-24 top-1/2 -z-10 rotate-12"
      >
        <Html5Icon />
      </motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute right-4 bottom-40 -z-10 -rotate-6"
      >
        <GithubIcon />
      </motion.span>
    </div>
  );
}
