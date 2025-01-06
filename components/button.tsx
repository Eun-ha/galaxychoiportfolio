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

  const checkType = category.button;

  return (
    <Link
      href={href}
      className={clsx("inline-block p-4 z-10 lg:block", {
        "text-black": !isActive,
        "text-point-pink": isActive && checkType === "resume",
        "text-point-cyan": isActive && checkType === "experiences",
        "text-point-orange": isActive && checkType === "educations",
        "text-point-violet": isActive && checkType === "skills",
      })}
    >
      {category.button}
    </Link>
  );
};
