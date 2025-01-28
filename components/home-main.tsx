"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { BoundaryMain } from "./boundary-main";
import { BoundaryButton } from "./boundary-button";
import { effectsX, effectsY } from "@/lib/motions";

export default function HomeMain() {
  return (
    <div className="lg:flex">
      <div className="pr-0 lg:pr-5">
        <BoundaryMain>
          <motion.h2
            custom={-5}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            Hello, It&apos;s Me
          </motion.h2>
          <motion.h3
            custom={-10}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            EunHa Choi
          </motion.h3>
          <motion.h3
            custom={-15}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            and I&apos;m a front end engineer
          </motion.h3>
          <motion.p
            custom={-20}
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
          <motion.a
            custom={-25}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
            href="files/CV.pdf"
            download
          >
            Download CV
          </motion.a>
        </BoundaryButton>
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
