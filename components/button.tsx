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
        "inline-block py-4 lg:pl-4 lg:block lg:rounded-lg lg:hover:bg-bg-hover",
        {
          "lg:bg-bg-active": isActive,
          "text-point-red ": isActive && checkCategory === "descriptions",
          "text-point-green ": isActive && checkCategory === "experiences",
          "text-point-orange": isActive && checkCategory === "educations",
          "text-point-blue": isActive && checkCategory === "certificates",
        }
      )}
    >
      {category.button}
    </Link>
  );
};
