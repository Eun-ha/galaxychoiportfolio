"use client";
import { Descriptions, Education, Experience, Skill } from "@/data/resume";
import { useEffect, useState } from "react";
import { Boundary } from "./boundary";
import clsx from "clsx";
import { getData } from "@/lib/utils";

export const ResumeContent = ({
  type,
}: {
  type: "descriptions" | "educations" | "experiences" | "skills";
}) => {
  const [contents, setContents] = useState<
    Descriptions[] | Education[] | Experience[] | Skill[]
  >([]);

  useEffect(() => {
    setContents(getData(type));
  }, [type]);

  const renderContent = (
    content: Descriptions | Education | Experience | Skill
  ) => {
    if (type === "descriptions") {
      const { title, date, performance, role, skills } =
        content as Descriptions;
      return (
        <>
          <h3>-업무명: {title}</h3>
          <p>-기간: {date}</p>
          <ul>
            -성과:
            {performance.map((y, index) => (
              <li key={index}>{y}</li>
            ))}
          </ul>
          <p>-역할: {role}</p>
          <p>-기술: {skills}</p>
        </>
      );
    }
    if (type === "educations") {
      const { school, date, degree } = content as Education;
      return (
        <>
          <h3>{school}</h3>
          <p>{date}</p>
          <p>{degree}</p>
        </>
      );
    }
    if (type === "experiences") {
      const { company, date, description } = content as Experience;
      return (
        <>
          <h3>{company}</h3>
          <p>{date}</p>
          <p>{description}</p>
        </>
      );
    }
    if (type === "skills") {
      const { name, level } = content as Skill;
      return (
        <>
          <h3>{name}</h3>
          <p>{level}</p>
        </>
      );
    }
    return null;
  };

  return (
    <section
      className={clsx({
        "lg:flex lg:flex-wrap lg:justify-start":
          type === "educations" || type === "skills",
      })}
    >
      {contents.map((content, index) => (
        <article
          key={index}
          className={clsx("mb-2 lg:mb-4", {
            "lg:mt-0 lg:basis-1/2": type === "educations" || type === "skills",
          })}
        >
          <Boundary category={type}>{renderContent(content)}</Boundary>
        </article>
      ))}
    </section>
  );
};
