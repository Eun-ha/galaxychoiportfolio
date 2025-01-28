"use client";

import NightIcon from "@/icons/nightIcon";
import SunnyIcon from "@/icons/sunnyIcon";
import { useEffect, useState } from "react";

export const DarkTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const colorMode = window.localStorage.getItem("color_mode");
    if (colorMode) {
      window.document.body.classList.add(colorMode);
      setTheme("dark");
    }

    const isDarkMode = window.navigator.userAgent.includes("{isDark property}");
    if (isDarkMode) {
      window.document.body.classList.add("dark");
      setTheme("dark");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.document.body.classList.add("dark");
      setTheme("dark");
    }

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", (e) => {
      if (e.matches) {
        window.document.body.classList.add("dark");
        setTheme("dark");
      } else {
        window.document.body.classList.remove("dark");
        setTheme("");
      }
    });
  }, []);

  const click = () => {
    const el = document.querySelector("body");
    const isLightMode = el?.classList.contains("light");
    if (isLightMode) {
      el?.classList.remove("light");
      el?.classList.add("dark");
      setTheme("dark");
    } else {
      el?.classList.remove("dark");
      el?.classList.add("light");
      setTheme("light");
    }
    return false;
  };

  return (
    <div className="dark-theme fixed right-4 bottom-4 z-10">
      <button onClick={click}>
        {theme === "light" ? <NightIcon /> : <SunnyIcon />}
      </button>
    </div>
  );
};
