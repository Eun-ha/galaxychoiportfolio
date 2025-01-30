"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function CheckMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const [isMain, setIsMain] = useState(false);
  useEffect(() => {
    return path === "/" ? setIsMain(true) : setIsMain(false);
  }, [path]);

  return (
    <div
      className={clsx("z-0", {
        Main: isMain,
        "bg-inherit": !isMain,
      })}
    >
      {children}
    </div>
  );
}
