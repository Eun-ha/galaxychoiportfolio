"use client";

import { Description } from "@/types/resume";
import { useQuery } from "@tanstack/react-query";
import { trackQueryMetric } from "@/lib/observability";
import { getDescriptionsByQuery } from "@/actions/resume-descriptions";

type DescriptionsQueryResponse = {
  items: Description[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export function useResumeDescriptionsQuery({
  page,
  query,
  pageSize = 4,
  initialData,
}: {
  page: number;
  query: string;
  pageSize?: number;
  initialData?: DescriptionsQueryResponse;
}) {
  return useQuery<DescriptionsQueryResponse>({
    queryKey: ["resume-descriptions", page, query, pageSize],
    queryFn: async () => {
      const start = performance.now();
      try {
        const data = await getDescriptionsByQuery({ page, pageSize, query: query.trim() });
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
    initialData,
  });
}
