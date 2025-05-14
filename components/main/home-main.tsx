"use client";
import Image from "next/image";
import { effectsX, effectsY } from "@/lib/motions";
import { BoundaryMain } from "../ui/boundary-main";
import { motion } from "motion/react";
import { BoundaryButton } from "../ui/boundary-button";
import { ExternalLink } from "../external-link";
import { Main } from "@/types/main";

type Props = {
  data: Main[];
};

export default function HomeMain(props: Props) {
  const { title, content1, content2, description, path, alt, button, url } =
    props.data[0];

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
            {title}
          </motion.h2>
          <motion.h3
            custom={-10}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {content1}
          </motion.h3>
          <motion.h3
            custom={-15}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {content2}
          </motion.h3>
          <motion.p
            custom={-20}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            {description}
          </motion.p>
          <motion.div
            custom={-25}
            initial="offscreen"
            whileInView="onscreen"
            variants={effectsY}
          >
            <BoundaryButton>
              <ExternalLink href={url} label="작업물 경로 새창 열기 버튼">
                {button}
              </ExternalLink>
            </BoundaryButton>
          </motion.div>
        </BoundaryMain>
      </div>
      <motion.div
        className="relative w-full lg:w-[500px] h-[400px] shrink-0 mt-6 lg:mt-0"
        custom={20}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsX}
      >
        <Image
          src={`/images/main/${path}.webp`}
          alt={alt}
          width={0}
          height={0}
          fill
          sizes="100% auto"
          className="object-cover rounded-md"
          priority={true}
        />
      </motion.div>
    </div>
  );
}
