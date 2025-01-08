"use client";
import Astronaut from "@/icons/astronaut";
import Close from "@/icons/close";
import Ham from "@/icons/ham";
import Moon from "@/icons/moon";
import Star from "@/icons/star";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { JSX, useLayoutEffect, useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  type Menu = {
    url: string;
    text: string;
    icon: JSX.Element;
    slug?: string | null;
  };
  const menu: Menu[] = [
    {
      url: "/",
      text: "Home",
      icon: <Star />,
      slug: null,
    },
    {
      url: "/resume",
      text: "Resume",
      icon: <Moon />,
      slug: "resume",
    },
    {
      url: "/work",
      text: "Work",
      icon: <Astronaut />,
      slug: "work",
    },
  ];

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useLayoutEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };

        handleResize(); // 초기 크기 설정

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);

    return windowSize;
  };

  const { width, height } = useWindowSize();
  const isMobile = width < 1024;

  const segment = useSelectedLayoutSegment();

  console.log(segment);

  return (
    <div
      className={clsx({
        "fixed top-0 right-0 w-60 h-full z-20 bg-background p-5":
          isMobile && isOpen,
      })}
    >
      <button
        className={clsx({
          hidden: !isMobile,
          block: isMobile,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close /> : <Ham />}
      </button>

      <nav
        className={clsx("flex justify-evenly", {
          block: !isMobile,
          hidden: isMobile && !isOpen,
          "flex-col items-start": isMobile && isOpen,
        })}
      >
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            onClick={close}
            className={clsx(
              "text-xl mt-5 flex items-center justify-center lg:mt-0 lg:pl-6 hover:text-red-500",
              {
                "text-red-500": segment === item.slug,
              }
            )}
          >
            <span>{item.icon}</span>
            <p className="pl-1">{item.text}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
