"use client";

import { UseActiveCategory } from "@/hooks/use-active-category";
import { UseOverTop } from "@/hooks/use-over-top";
import clsx from "clsx";
import { motion } from "motion/react";

export default function ScrollTrackerNav() {
  const data = ["Main", "About", "Skills", "Contact"];

  const overTop = UseOverTop(80);

  console.log("overTop");
  console.log(overTop);

  const isActiveCategory = UseActiveCategory();

  const effectsY = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "linear",
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={effectsY}
      className={clsx("none", {
        "fixed bottom-4 left-1/2 w-[280px] -ml-[140px] flex justify-evenly  rounded-lg border border-darkOnly-border bg-darkOnly-emphasis":
          overTop,
      })}
    >
      {data.map((data, index) => (
        <a
          href={`#0${index}`}
          key={index}
          className={clsx("text-darkOnly-text", {
            "text-point-red": isActiveCategory === index,
          })}
        >
          {data}
        </a>
      ))}
    </motion.div>
  );
}
