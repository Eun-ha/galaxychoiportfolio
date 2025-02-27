"use client";
import { EducationsMeta } from "@/data/resume";
import { BoundaryResume } from "../ui/boundary-resume";

interface Props {
  data: EducationsMeta[];
}

export const ResumeEducation = (props: Props) => {
  const data = props.data[0].contents;

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
              <h4>{data.degree !== "" ? "전공" : "교육내용"}</h4>
              <p>{data.degree || data.institution}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
