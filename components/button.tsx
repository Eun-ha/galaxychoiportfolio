"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Categories } from "./button-list";

// export default function Button() {
//   const title = getButtonTitle();
//   return (
//     <>
//       {title.map((title, index) => (
//         <Link className="block" href={`/resume/${title}`} key={index}>
//           {title}
//         </Link>
//       ))}
//     </>
//   );
// }

export const Button = ({
  path,
  category,
}: {
  path: string;
  category: Categories;
}) => {
  const segment = useSelectedLayoutSegment();
  const href = category.slug ? path + "/" + category.slug : path;

  console.log(category);

  const isActive =
    (!category.slug && segment === null) ||
    segment === category.segment ||
    segment === category.slug;

  return (
    <Link
      href={href}
      className={clsx("block", {
        "text-black": !isActive,
        "text-red-500": isActive,
      })}
    >
      {category.button}
    </Link>
  );
};
