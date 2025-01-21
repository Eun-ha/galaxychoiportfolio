"use client";
import { Education } from "@/data/resume";

export const ResumeEducation = ({ data }: { data: Education[] }) => {
  console.log(data);

  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <h3>{data.school}</h3>
          <p>{data.date}</p>
          <p>{data.degree}</p>
        </div>
      ))}
    </>
  );
};
