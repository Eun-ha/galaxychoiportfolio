"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// 테마 컨텍스트 생성
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

// 테마 프로바이더 컴포넌트
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // 기본 테마는 'dark'

  // 페이지가 로드될 때, 로컬 스토리지에서 저장된 테마를 읽어옵니다.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      //console.log("savedTheme");
      //console.log(savedTheme);
      window.document.body.classList.add(savedTheme);
      setTheme(savedTheme);
    }

    const isDarkMode = window.navigator.userAgent.includes("{isDark property}");
    if (isDarkMode) {
      //console.log("isDarkMode");
      //console.log(isDarkMode);
      window.document.body.classList.add("dark");
      setTheme("dark");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //console.log("prefers-color-scheme");
      window.document.body.classList.add("dark");
      setTheme("dark");
    }
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", (e) => {
      if (e.matches) {
        //console.log("mediaQueryList");
        //console.log(mediaQueryList);
        window.document.body.classList.add("dark");
        setTheme("dark");
      } else {
        //console.log("mediaQueryList");
        //console.log(mediaQueryList);
        window.document.body.classList.remove("dark");
        setTheme("light");
      }
    });

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
  }, []);

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // 로컬 스토리지에 테마 저장
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

// 테마 컨텍스트 사용 훅
export const useTheme = () => useContext(ThemeContext);
