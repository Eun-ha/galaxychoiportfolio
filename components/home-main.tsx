"use client";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function HomeMain() {
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
      <div className="pr-0 lg:pr-5">
        <motion.h3
          custom={-5}
          initial="offscreen"
          whileInView="onscreen"
          variants={effectsY}
          className="text-4xl lg:text-6xl text-point-red"
        >
          Hello, It&apos;s Me
        </motion.h3>
        <motion.p
          custom={-10}
          initial="offscreen"
          whileInView="onscreen"
          variants={effectsY}
          className="text-3xl lg:text-5xl mt-6"
        >
          EunHa Choi
        </motion.p>
        <motion.p
          custom={-15}
          initial="offscreen"
          whileInView="onscreen"
          variants={effectsY}
          className="text-2xl lg:text-4xl mt-6"
        >
          and I&apos;m a front end engineer
        </motion.p>
        <motion.p
          custom={-20}
          initial="offscreen"
          whileInView="onscreen"
          variants={effectsY}
          className="text-base lg:text-xl mt-6"
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
        <motion.span
          custom={-25}
          initial="offscreen"
          whileInView="onscreen"
          variants={effectsY}
          className="text-base inline-block mt-6 p-2 bg-slate-500"
        >
          <a href="files/CV.pdf" download>
            Download CV
          </a>
        </motion.span>
      </div>
      <motion.div
        className="relative w-full lg:w-[500px] h-[400px] shrink-0 mt-6 lg:mt-0"
        custom={20}
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
    </div>
  );
}
