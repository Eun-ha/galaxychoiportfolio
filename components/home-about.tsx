"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { BoundaryMain } from "./boundary-main";
import { BoundaryButton } from "./boundary-button";

export default function HomeAbout() {
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
  const effectsX = {
    offscreen: (index: number) => ({
      opacity: 0,
      x: index,
    }),
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "linear",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="lg:flex">
      <motion.div
        className="relative w-full lg:w-[500px] h-[400px] shrink-0 mt-6 lg:mt-0"
        custom={-20}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsX}
      >
        <Image
          src={`/images/works/01.png`}
          alt="main 이미지"
          width={0}
          height={0}
          fill
          sizes="100% auto"
          className="object-cover"
        />
      </motion.div>

      <div className="pl-0 lg:pl-5 mt-6 lg:mt-0">
        <BoundaryMain>
          <motion.span
            custom={25}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            Let me introduce myself
          </motion.span>
          <motion.h2
            custom={20}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            About Me
          </motion.h2>
          <motion.h3
            custom={15}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            Frontend Developer
          </motion.h3>
          <motion.p
            custom={10}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
            ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
          </motion.p>
        </BoundaryMain>
        <BoundaryButton>
          <motion.button
            custom={5}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            Read more
          </motion.button>
        </BoundaryButton>
      </div>
    </div>
  );
}
