"use client";

import { useEffect, useState } from "react";
import { MARGINOFERROR } from "@/lib/constants";

export function UseActiveCategory() {
  const [isActiveCategory, setIsActiveCategory] = useState(0);

  useEffect(() => {
    const about = document.getElementById("01");
    const skills = document.getElementById("02");
    const contact = document.getElementById("03");

    if (!about || !skills || !contact) return;

    const handleScroll = () => {
      const topAbout = about.getBoundingClientRect().top + window.scrollY;
      const topSkills = skills.getBoundingClientRect().top + window.scrollY;
      const topContact = contact.getBoundingClientRect().top + window.scrollY;

      /**
       * 0:main
       * 1:about
       * 2:skills
       * 3:contact
       */

      window.scrollY + MARGINOFERROR >= topAbout &&
      window.scrollY + MARGINOFERROR < topSkills
        ? setIsActiveCategory(1)
        : window.scrollY + MARGINOFERROR >= topSkills &&
            window.scrollY + MARGINOFERROR < topContact
          ? setIsActiveCategory(2)
          : window.scrollY + MARGINOFERROR >= topContact ||
              window.scrollY + MARGINOFERROR > document.body.offsetHeight
            ? setIsActiveCategory(3)
            : setIsActiveCategory(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return isActiveCategory;
}
