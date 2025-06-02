"use client";
import { Education } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import { SkeletonCard } from "../ui/skeleton-card";

type Props = {
  data: Education[];
};

export const ResumeEducation = (props: Props) => {
  const data = props.data;

  if (!data || data.length === 0) {
    return <SkeletonCard />;
  }

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
