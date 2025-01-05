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
    let windowHeight = window.scrollY;
    windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
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
        "bg-rose-100 flex place-content-evenly lg:block lg:place-content-start",
        {
          "fixed-none": !stickyClass,
          "fixed top-0 w-full lg:static lg:w-auto": stickyClass,
        }
      )}
    >
      {categories.map((category) => (
        <Button key={path + category.slug} category={category} path={path} />
      ))}
    </aside>
  );
};
