"use client";
import Image from "next/image";
import GithubIcon from "@/icons/githubIcon";
import Html5Icon from "@/icons/html5Icon";
import JavascriptIcon from "@/icons/javascriptIcon";
import { bounceTransition, bounceTransition2, fadeIn } from "@/lib/motions";
import * as motion from "motion/react-client";

export default function Decoration() {
  return (
    <div className="w-full h-full z-10">
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
        className="block absolute left-[10%] lg:left-[30%] top-[140px] -z-10 w-[400px] h-[400px]"
      >
        <Image
          src="/images/astronaut.webp"
          alt="astronaut"
          width={0}
          height={0}
          fill
          sizes="100% auto"
          priority={true}
        />
      </motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute right-20 top-1/4 mt-[250px] -z-10 -rotate-12"
      >
        <JavascriptIcon />
      </motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute -left-24 top-[48%] -z-10 rotate-12"
      >
        <Html5Icon />
      </motion.span>

      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        variants={fadeIn}
        className="block absolute right-4 bottom-[20%] -z-10 -rotate-6"
      >
        <GithubIcon />
      </motion.span>
    </div>
  );
}
