"use client";

import { container, effectsY, listItem } from "@/lib/motions";
import { Chart } from "./chart";
import { motion } from "motion/react";
import { Home } from "@/data/main";

interface Props {
  data: Pick<Home, "skills">[];
}
export default function HomeSkills(props: Props) {
  const data = props.data[0].skills;

  return (
    <div className="text-center">
      <motion.h3
        custom={-5}
        initial="offscreen"
        whileInView="onscreen"
        variants={effectsY}
        className="inline-block text-xl text-point-red"
      >
        My Skills
      </motion.h3>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-wrap justify-evenly mt-12 lg:mt-24 max-w-[1024px] mx-auto"
      >
        {data.map((data, index) => (
          <motion.li
            className="mb-8 basis-[50%] [&_div]:aspect-auto lg:basis-auto lg:[&_div]:aspect-video"
            key={index}
            variants={listItem}
          >
            <Chart
              color={data.color}
              skills={data.skills}
              name={data.name}
              angle={data.angle}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
