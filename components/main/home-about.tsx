"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { BoundaryMain } from "../ui/boundary-main";
import { BoundaryButton } from "../ui/boundary-button";
import { effectsX, effectsY } from "@/lib/motions";
import { Main } from "@/data/home";

interface Props {
  data: Main[];
}

export default function HomeAbout(props: Props) {
  const { title, content1, content2, description, button, image, alt } =
    props.data[1];
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
          src={image}
          alt={alt}
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
            {content1}
          </motion.span>
          <motion.h2
            custom={20}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {title}
          </motion.h2>
          <motion.h3
            custom={15}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {content2}
          </motion.h3>
          <motion.p
            custom={10}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {description}
          </motion.p>
        </BoundaryMain>
        <BoundaryButton theme="dark">
          <motion.button
            custom={5}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {button}
          </motion.button>
        </BoundaryButton>
      </div>
    </div>
  );
}
