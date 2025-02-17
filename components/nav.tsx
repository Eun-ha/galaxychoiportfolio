"use client";
import AstronautIcon from "@/icons/astronautIcon";
import CloseIcon from "@/icons/closeIcon";
import HamIcon from "@/icons/hamIcon";
import MoonIcon from "@/icons/moonIcon";
import StarIcon from "@/icons/starIcon";

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
      icon: <StarIcon />,
      slug: null,
    },
    {
      url: "/resume/descriptions",
      text: "Resume",
      icon: <MoonIcon />,
      slug: "resume",
    },
    {
      url: "/work",
      text: "Work",
      icon: <AstronautIcon />,
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

  const { width } = useWindowSize();
  const isMobile = width < 1024;

  const segment = useSelectedLayoutSegment();

  return (
    <div
      className={clsx({
        "fixed top-0 right-0 w-full h-full z-20 bg-bg-default p-5 overflow-y-hidden text-right":
          isOpen && isMobile,
      })}
    >
      <button
        className={clsx({
          hidden: !isMobile,
          "inline-block": isMobile,
        })}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="네비 메뉴 보기 버튼"
      >
        {isOpen ? <CloseIcon /> : <HamIcon />}
      </button>

      <nav
        className={clsx("flex justify-evenly", {
          block: !isMobile,
          hidden: !isOpen && isMobile,
          "flex-col items-start": isOpen && isMobile,
        })}
      >
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            onClick={close}
            className={clsx("mt-5 lg:mt-0 lg:pl-6 hover:text-point-red", {
              "text-point-red": segment === item.slug,
            })}
            aria-label={`Link to ${item.slug === null ? "Home" : item.slug}`}
          >
            <span
              className={clsx(
                "flex items-center justify-center p-2 rounded-md",
                {
                  "  bg-amber-950": segment === item.slug,
                }
              )}
            >
              <span className="text-text-emphasis">{item.icon}</span>
              <p className="pl-1">{item.text}</p>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
