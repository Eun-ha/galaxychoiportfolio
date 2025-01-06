"use client";
import {
  Education,
  Experience,
  getEducations,
  getExperiences,
  getSkills,
  Skill,
} from "@/data/resume";
import { useEffect, useState } from "react";
import { Boundary } from "./boundary";
import clsx from "clsx";

export const ResumeContent = ({
  type,
}: {
  type: "educations" | "experiences" | "skills";
}) => {
  const [contents, setContents] = useState<
    Experience[] | Education[] | Skill[]
  >([]);

  const getData = () => {
    switch (type) {
      case "educations":
        return getEducations();
      case "experiences":
        return getExperiences();
      case "skills":
        return getSkills();
      default:
        return [];
    }
  };

  useEffect(() => {
    setContents(getData());
  }, [type]); // 빈 배열을 넣으면 한 번만 실행됨

  const checkCategory = type;

  console.log(checkCategory);

  return (
    <section
      className={clsx("", {
        "lg:flex lg:flex-wrap lg:justify-start":
          checkCategory === "educations" || checkCategory === "skills",
      })}
    >
      {contents.map((content, index) => (
        <article
          key={index}
          className={clsx("mb-2 lg:mb-4", {
            "lg:mt-0 lg:basis-1/2":
              checkCategory === "educations" || checkCategory === "skills",
          })}
        >
          <Boundary category={type}>
            {type === "educations" && (
              <>
                <h3>{(content as Education).school}</h3>
                <p>{(content as Education).date}</p>
                <p>{(content as Education).degree}</p>
              </>
            )}
            {type === "experiences" && (
              <>
                <h3>{(content as Experience).company}</h3>
                <p>{(content as Experience).date}</p>
                <p>{(content as Experience).description}</p>
              </>
            )}
            {type === "skills" && (
              <>
                <h3>{(content as Skill).name}</h3>
                <p>{(content as Skill).level}</p>
              </>
            )}
          </Boundary>
        </article>
      ))}
    </section>
  );
};
