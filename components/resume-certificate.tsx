"use client";
import { Certificate } from "@/data/resume";

export const ResumeCertificate = ({ data }: { data: Certificate[] }) => {
  console.log(data);

  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <h3>{data.name}</h3>
          <p>{data.level}</p>
        </div>
      ))}
    </>
  );
};
