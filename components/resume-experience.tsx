"use client";
import { Experience } from "@/data/resume";
import { BoundaryResume } from "./boundary-resume";

export const ResumeExperience = ({ data }: { data: Experience[] }) => {
  return (
    <>
      {data.map((data, index) => (
        <div key={index} className="mb-4">
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
              <h4>직책</h4>
              <p>{data.title}</p>
            </div>
          </BoundaryResume>
        </div>
      ))}
    </>
  );
};
