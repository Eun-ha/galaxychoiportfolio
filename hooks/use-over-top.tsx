"use client";

import { useEffect, useState } from "react";

export function UseOverTop(offset = 0) {
  const [isOvertop, SetIsOvertop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      SetIsOvertop(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOvertop]);

  return isOvertop;
}
