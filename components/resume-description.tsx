"use client";
import { Description } from "@/data/resume";
import { Boundary2 } from "./boundary2";
export const ResumeDescription = ({ data }: { data: Description[] }) => {
  console.log(data);

  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <Boundary2>
            <h3>-업무명: {data.title}</h3>
            <p>-기간: {data.date}</p>
            <ul>
              -성과:
              {data.performance.map((y, index) => (
                <li key={index}>{y}</li>
              ))}
            </ul>
            <p>-역할: {data.role}</p>
            <p>-기술: {data.skills}</p>
          </Boundary2>
        </div>
      ))}
    </>
  );
};
