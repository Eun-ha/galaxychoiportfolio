"use client";
import { Description } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import Pagination from "../ui/pagination";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { SkeletonCard } from "../ui/skeleton-card";

type Props = {
  data: Description[];
  allDesc?: Description[];
};

export const ResumeDescription = (props: Props) => {
  const { data, allDesc } = props;

  const isMobile = useIsMobile();

  const totalPages =
    !isMobile && allDesc && allDesc.length > 0
      ? Math.ceil(allDesc.length / 4)
      : 1;

  const listData = !isMobile ? data : allDesc;

  if (!listData || listData.length === 0) {
    return <SkeletonCard />;
  }

  return (
    <div className="w-full">
      {listData.map((data, index) => (
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

      {!isMobile ? (
        <>
          <div className="flex justify-center w-full mt-5">
            <Pagination totalPages={totalPages} />
          </div>
        </>
      ) : null}
    </div>
  );
};
