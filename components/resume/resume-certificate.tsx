"use client";
import { Certificate } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";

type Props = {
  data: Certificate[];
};

export const ResumeCertificate = (props: Props) => {
  const data = props.data;

  console.log(data);

  return (
    <>
      {data?.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.name}</h3>
            <div>
              <h4>취득일</h4>
              <p>{data.date}</p>
            </div>
            <div>
              <h4>발급기관</h4>
              <p>{data.authority}</p>
            </div>
          </BoundaryResume>
        </article>
      ))}
    </>
  );
};
