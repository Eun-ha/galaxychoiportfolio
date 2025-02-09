"use client";
import { Description } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

export const ResumeDescription = ({ data }: { data: Description[] }) => {
  return (
    <>
      {data.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.title}</h3>
            <div>
              <h4>성과</h4>
              <ul>
                {data.performance.map((y, index) => (
                  <li key={index}>{y}</li>
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
