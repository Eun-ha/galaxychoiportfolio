"use client";
import { useEffect, useState } from "react";
import { Button } from "./button";
import clsx from "clsx";

export type Categories = {
  button: string;
  slug?: string;
  segment?: string;
};

export const ButtonList = ({
  path,
  categories,
}: {
  path: string;
  categories: Categories[];
}) => {
  const [stickyClass, setStickyClass] = useState(false);

  function stickNavbar() {
    const windowHeight = window.scrollY;
    windowHeight > 80 ? setStickyClass(true) : setStickyClass(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.addEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <aside
      className={clsx(
        "z-10 flex place-content-evenly lg:block lg:place-content-start lg:shrink-0 lg:w-[200px] rounded-lg border border-subbackground lg:border-transparent lg:border-none bg-subbackground lg:bg-transparent",
        {
          "fixed-none": !stickyClass,
          "fixed left-0 top-0 w-full lg:fixed-none lg:static": stickyClass,
        }
      )}
    >
      {categories.map((category) => (
        <Button key={path + category.slug} category={category} path={path} />
      ))}
    </aside>
  );
};
