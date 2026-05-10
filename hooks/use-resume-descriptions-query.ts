"use client";

import { Description } from "@/types/resume";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { trackQueryMetric } from "@/lib/observability";
import { getDescriptionsByQuery } from "@/actions/resume-descriptions";

export type DescriptionsQueryResponse = {
  items: Description[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export function useResumeDescriptionsQuery({
  page,
  pageSize = 4,
  initialData,
}: {
  page: number;
  pageSize?: number;
  initialData?: DescriptionsQueryResponse;
}) {
  return useQuery<DescriptionsQueryResponse>({
    queryKey: ["resume-descriptions", page, pageSize],
    queryFn: async () => {
      const start = performance.now();
      try {
        const data = await getDescriptionsByQuery({ page, pageSize });
        trackQueryMetric({
          key: "resume-descriptions",
          durationMs: performance.now() - start,
          status: "success",
        });
        return data;
      } catch {
        trackQueryMetric({
          key: "resume-descriptions",
          durationMs: performance.now() - start,
          status: "error",
        });
        throw new Error("Failed to fetch resume descriptions");
      }
    },
    placeholderData: initialData,
    enabled: page > 1,
  });
}

export function useResumeDescriptionsInfiniteQuery({
  pageSize = 4,
  initialData,
}: {
  pageSize?: number;
  initialData?: DescriptionsQueryResponse;
}) {
  return useInfiniteQuery<DescriptionsQueryResponse>({
    queryKey: ["resume-descriptions-infinite", pageSize],
    queryFn: async ({ pageParam }) => {
      const start = performance.now();
      try {
        const data = await getDescriptionsByQuery({ page: pageParam as number, pageSize });
        trackQueryMetric({
          key: "resume-descriptions-infinite",
          durationMs: performance.now() - start,
          status: "success",
        });
        return data;
      } catch {
        trackQueryMetric({
          key: "resume-descriptions-infinite",
          durationMs: performance.now() - start,
          status: "error",
        });
        throw new Error("Failed to fetch resume descriptions");
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
    initialData: initialData
      ? { pages: [initialData], pageParams: [1] }
      : undefined,
  });
}
