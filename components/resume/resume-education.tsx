"use client";
import { Education } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

export const ResumeEducation = ({ data }: { data: Education[] }) => {
  return (
    <>
      {data.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.school}</h3>
            <div>
              <h4>기간</h4>
              <p>{data.date}</p>
            </div>
            <div>
              <h4>전공/교육내용</h4>
              <p>{data.degree}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
