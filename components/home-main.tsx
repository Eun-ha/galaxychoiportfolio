"use client";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function HomeMain() {
  return (
    <div className="lg:flex">
      <div className="pr-5">
        <motion.h3
          initial={{ opacity: 0, transform: "translateY(-5px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ type: "linear" }}
          className="text-6xl"
        >
          Hello, It's Me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, transform: "translateY(-10px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ type: "linear" }}
          className="text-5xl mt-6"
        >
          EunHa Choi
        </motion.p>
        <motion.p
          initial={{ opacity: 0, transform: "translateY(-15px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ type: "linear" }}
          className="text-4xl mt-6"
        >
          and I'm a front end engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ type: "linear" }}
          className="text3xl mt-6"
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </motion.p>
        <motion.button
          initial={{ opacity: 0, transform: "translateY(-25px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          className="mt-6 p-2 bg-slate-500"
        >
          Download CV
        </motion.button>
      </div>
      <motion.div
        className="relative w-[300px] h-[400px] bg-slate-500 shrink-0"
        initial={{ opacity: 0, transform: "translateX(20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ type: "linear" }}
      >
        <Image
          src={`/images/works/01.png`}
          alt="main 이미지"
          width={0}
          height={0}
          fill
          sizes="100% 300px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
