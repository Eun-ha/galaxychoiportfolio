"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Categories } from "./button-list";

export const Button = ({
  path,
  category,
}: {
  path: string;
  category: Categories;
}) => {
  const segment = useSelectedLayoutSegment();
  const href = category.slug ? path + "/" + category.slug : path;

  const isActive =
    (!category.slug && segment === null) ||
    segment === category.segment ||
    segment === category.slug;

  const checkCategory = category.button;

  return (
    <Link
      href={href}
      className={clsx(
        "inline-block p-4 z-10 lg:mb-2 lg:block rounded-lg lg:border lg:border-subbackground border-transparent bg-transparent lg:bg-subbackground",
        {
          "text-foreground": !isActive,
          "text-point-pink": isActive && checkCategory === "resume",
          "text-point-cyan": isActive && checkCategory === "experiences",
          "text-point-orange": isActive && checkCategory === "educations",
          "text-point-violet": isActive && checkCategory === "skills",
        }
      )}
    >
      {category.button}
    </Link>
  );
};
