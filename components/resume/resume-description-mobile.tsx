"use client";

import { useEffect, useRef } from "react";
import { Description } from "@/types/resume";
import { BoundaryResume } from "../ui/boundary-resume";
import { SkeletonCard } from "../ui/skeleton-card";
import { useResumeDescriptionsInfiniteQuery } from "@/hooks/use-resume-descriptions-query";
import { DescMeta } from "@/app/resume/[slug]/page";

type Props = {
  data: Description[];
  descMeta?: DescMeta;
};

export const ResumeDescriptionMobile = ({ data, descMeta }: Props) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { data: infiniteData, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useResumeDescriptionsInfiniteQuery({
      pageSize: 4,
      initialData: descMeta
        ? {
            items: data,
            totalCount: descMeta.totalCount,
            totalPages: descMeta.totalPages,
            currentPage: 1,
          }
        : undefined,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const items = infiniteData?.pages.flatMap((p) => p.items) ?? data;

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
      {isFetchingNextPage && <SkeletonCard />}
      <div ref={sentinelRef} className="h-4" />
    </div>
  );
};
