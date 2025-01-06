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

  return (
    <section>
      {contents.map((content, index) => (
        <article key={index}>
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
