"use client";

import { useEffect } from "react";

export const DarkTheme = () => {
  useEffect(() => {
    const colorMode = window.localStorage.getItem("color_mode");
    if (colorMode) {
      window.document.body.classList.add(colorMode);
    }

    const isDarkMode = window.navigator.userAgent.includes("{isDark property}");
    if (isDarkMode) {
      window.document.body.classList.add("dark");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.document.body.classList.add("dark");
    }

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", (e) => {
      if (e.matches) {
        window.document.body.classList.add("dark");
      } else {
        window.document.body.classList.remove("dark");
      }
    });
  }, []);

  const click = () => {
    const el = document.querySelector("body");
    const isLightMode = el?.classList.contains("light");
    if (isLightMode) {
      el?.classList.remove("light");
      el?.classList.add("dark");
    } else {
      el?.classList.remove("dark");
      el?.classList.add("light");
    }
    return false;
  };

  return (
    <div>
      <div className="dark-example-02-wrapper">
        <button className="dark-example-02-btn" onClick={click}>
          다크 테마 전환
        </button>
      </div>
    </div>
  );
};
