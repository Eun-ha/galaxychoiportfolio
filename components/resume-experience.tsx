"use client";
import { Experience } from "@/data/resume";

export const ResumeExperience = ({ data }: { data: Experience[] }) => {
  console.log(data);

  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <h3>{data.company}</h3>
          <p>{data.date}</p>
          <p>{data.description}</p>
          <p>{data.title}</p>
        </div>
      ))}
    </>
  );
};
