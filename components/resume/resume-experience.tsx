"use client";
import { ExperiencesMeta } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

interface Props {
  data: ExperiencesMeta[];
}

export const ResumeExperience = (props: Props) => {
  const data = props.data[0].contents;

  return (
    <>
      {data.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.company}</h3>
            <div>
              <h4>재직기간</h4>
              <p>{data.date}</p>
            </div>
            <div>
              <h4>업무내용</h4>
              <p>{data.description}</p>
            </div>
            <div>
              <h4>직책</h4>
              <p>{data.title}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
