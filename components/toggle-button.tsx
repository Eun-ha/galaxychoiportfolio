"use client";
import { useTheme } from "@/context/ThemeContext";
import NightIcon from "@/icons/nightIcon";
import SunnyIcon from "@/icons/sunnyIcon";

export function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="dark-theme fixed right-4 bottom-4 z-30">
      <button onClick={toggleTheme} aria-label="다크테마 컨트롤 버튼">
        {theme === "light" ? <NightIcon /> : <SunnyIcon />}
      </button>
    </div>
  );
}
