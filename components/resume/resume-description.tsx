"use client";
import { DescriptionMeta } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

interface Props {
  data: DescriptionMeta[];
}

export const ResumeDescription = (props: Props) => {
  const data = props.data[0].contents;
  return (
    <>
      {data.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.title}</h3>
            <div>
              <h4>성과</h4>
              <ul>
                {data.performance.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>역할</h4>
              <p> {data.role}</p>
            </div>
            <div>
              <h4>기술</h4>
              <p>{data.skills}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
