"use client";

import { useEffect, useRef, useState } from "react";

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

    const topAbout = about.getBoundingClientRect().top;
    const topSkills = skills.getBoundingClientRect().top;
    const topContact = contact.getBoundingClientRect().top;

    const handleScroll = () => {
      /*
      console.log("==========스크롤 수치====");
      console.log("scroll");
      console.log(window.scrollY);
      console.log("==============");

      console.log("about");
      console.log(topAbout);
      console.log("skills");
      console.log(topSkills);
      console.log("contact");
      console.log(topContact);
      */

      console.log(window.innerHeight);
      console.log(window.scrollY);

      /**
       * 0:main
       * 1:about
       * 2:skills
       * 3:contact
       */

      window.innerHeight + window.scrollY > topAbout &&
      window.innerHeight + window.scrollY < topSkills
        ? setIsActiveCategory(1)
        : window.innerHeight + window.scrollY > topSkills &&
          window.innerHeight + window.scrollY < topContact
        ? setIsActiveCategory(2)
        : window.innerHeight + window.scrollY > topContact ||
          window.innerHeight + window.scrollY >= document.body.offsetHeight
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
