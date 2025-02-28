"use client";
import { ExperiencesMeta } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

type Props = {
  data: ExperiencesMeta[];
};

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
              <ul>
                {data.description.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
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
