"use client";
import { Description } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import Pagination from "../ui/pagination";

type Props = {
  data: Description[];
  allDesc?: Description[];
};

export const ResumeDescription = (props: Props) => {
  const { data, allDesc } = props;

  const totalPages =
    allDesc && allDesc.length > 0 ? Math.ceil(allDesc.length / 5) : 1;

  console.log("totalPages", totalPages);

  return (
    <div className="w-full">
      {data.map((data, index) => (
        <article key={index}>
          <BoundaryResume>
            <h3>{data.title}</h3>
            <div>
              <h4>기간</h4>
              <p>{data.date}</p>
            </div>
            <div>
              <h4>성과</h4>
              <ul>
                {data.performance.map((data, index) => (
                  <li key={index}>{data}</li>
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
      <div className="flex justify-center w-full mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
