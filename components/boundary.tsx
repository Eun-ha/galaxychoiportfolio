import clsx from "clsx";
import React from "react";

interface Category {
  children: React.ReactNode;
  size?: "small" | "default";
  animateRerendering?: boolean;
  category?: string;
}

export const Boundary = (Props: Category) => {
  const {
    children,
    size = "default",
    animateRerendering = "true",
    category = "",
  } = Props;

  return (
    <div
      className={clsx("relative rounded-lg border border-dashed", {
        "p-3 lg:p-5": size === "small",
        "p-4 lg:p-9": size === "default",
        "animate-[rerender_1s_ease-in-out_1]": animateRerendering,
        "border-point-pink [&_h3]:text-point-pink": category === "",
        "border-point-cyan  [&_h3]:text-point-cyan": category === "experiences",
        "border-point-orange [&_h3]:text-point-orange":
          category === "educations",
        "border-point-violet [&_h3]:text-point-violet": category === "skills",
      })}
    >
      {children}
    </div>
  );
};
