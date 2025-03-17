"use client";
import { Experience } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";

type Props = {
  data: Experience[];
};

export const ResumeExperience = (props: Props) => {
  const data = props.data;

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
              <h4>직책&역할</h4>
              <p>사원 / {data.title}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
