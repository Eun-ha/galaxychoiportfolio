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
        <div key={index}>
          {type === "educations" && (
            <>
              <p>{(content as Education).school}</p>
              <p>{(content as Education).date}</p>
              <p>{(content as Education).degree}</p>
            </>
          )}
          {type === "experiences" && (
            <>
              <p>{(content as Experience).company}</p>
              <p>{(content as Experience).date}</p>
              <p>{(content as Experience).description}</p>
            </>
          )}
          {type === "skills" && (
            <>
              <p>{(content as Skill).name}</p>
              <p>{(content as Skill).level}</p>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
