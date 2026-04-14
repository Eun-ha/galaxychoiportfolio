"use client";
import { Description } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import Pagination from "../ui/pagination";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { SkeletonCard } from "../ui/skeleton-card";
import { useSearchParams } from "next/navigation";
import { useResumeDescriptionsQuery } from "@/hooks/use-resume-descriptions-query";

type Props = {
  data: Description[];
  allDesc?: Description[];
};

export const ResumeDescription = (props: Props) => {
  const { data, allDesc } = props;
  const searchParams = useSearchParams();

  const isMobile = useIsMobile();
  const currentPage = Number(searchParams.get("page")) || 1;
  const currentQuery = searchParams.get("query") ?? "";

  const { data: queryData, isLoading } = useResumeDescriptionsQuery({
    page: currentPage,
    query: currentQuery,
    pageSize: 4,
    initialData: {
      items: data,
      totalCount: allDesc?.length ?? data.length,
      totalPages: Math.max(1, Math.ceil((allDesc?.length ?? data.length) / 4)),
      currentPage,
    },
  });


  if (isMobile === null) {
    return <SkeletonCard />;
  }

  const totalPages = !isMobile ? queryData?.totalPages ?? 1 : 1;

  const listData: Description[] = !isMobile
    ? queryData?.items ?? []
    : allDesc ?? data;

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className="w-full">
      {!listData || listData.length === 0 ? (
        <BoundaryResume>
          <p>조건에 맞는 이력이 없습니다.</p>
        </BoundaryResume>
      ) : null}
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
