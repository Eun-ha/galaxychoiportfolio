"use client";

import { useEffect, useRef, useState } from "react";
import { MARGINOFERROR } from "@/lib/constants";

export function UseActiveCategory() {
  const [isActiveCategory, setIsActiveCategory] = useState(0);

  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    aboutRef.current = document.getElementById("01");
    skillsRef.current = document.getElementById("02");
    contactRef.current = document.getElementById("03");

    const about = aboutRef.current;
    const skills = skillsRef.current;
    const contact = contactRef.current;

    if (!about || !skills || !contact) return;

    const topAbout = about.getBoundingClientRect().top + window.scrollY;
    const topSkills = skills.getBoundingClientRect().top + window.scrollY;
    const topContact = contact.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
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
  }, [aboutRef.current, skillsRef.current, contactRef.current]);

  return isActiveCategory;
}
