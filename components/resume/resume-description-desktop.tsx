"use client";

import { Description } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import Pagination from "../ui/pagination";
import { SkeletonCard } from "../ui/skeleton-card";
import { useSearchParams } from "next/navigation";
import { useResumeDescriptionsQuery } from "@/hooks/use-resume-descriptions-query";
import { DescMeta } from "@/app/resume/[slug]/page";

type Props = {
  data: Description[];
  descMeta?: DescMeta;
};

export const ResumeDescriptionDesktop = ({ data, descMeta }: Props) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data: queryData, isLoading } = useResumeDescriptionsQuery({
    page: currentPage,
    pageSize: 4,
    initialData: {
      items: data,
      totalCount: descMeta?.totalCount ?? data.length,
      totalPages: descMeta?.totalPages ?? Math.max(1, Math.ceil(data.length / 4)),
      currentPage: descMeta?.currentPage ?? currentPage,
    },
  });

  if (isLoading) return <SkeletonCard />;

  const items = queryData?.items ?? [];
  const totalPages = queryData?.totalPages ?? 1;

  return (
    <div className="w-full">
      {items.length === 0 ? (
        <BoundaryResume>
          <p>조건에 맞는 이력이 없습니다.</p>
        </BoundaryResume>
      ) : (
        items.map((item, index) => (
          <article key={index}>
            <BoundaryResume>
              <h3>{item.title}</h3>
              <div>
                <h4>기간</h4>
                <p>{item.date}</p>
              </div>
              <div>
                <h4>성과</h4>
                <ul>
                  {item.performance.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>역할</h4>
                <p>{item.role}</p>
              </div>
              <div>
                <h4>기술</h4>
                <p>{item.skills}</p>
              </div>
            </BoundaryResume>
          </article>
        ))
      )}
      <div className="flex justify-center w-full mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
