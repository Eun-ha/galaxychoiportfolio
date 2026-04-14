"use client";

import { Description } from "@/types/resume";
import { useQuery } from "@tanstack/react-query";
import { trackQueryMetric } from "@/lib/observability";

type DescriptionsQueryResponse = {
  items: Description[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

type ApiSuccess<T> = {
  success: true;
  data: T;
  requestId: string;
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
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
      });

      if (query.trim()) {
        params.set("query", query.trim());
      }

      const response = await fetch(`/api/resume/descriptions?${params}`);

      if (!response.ok) {
        trackQueryMetric({
          key: "resume-descriptions",
          durationMs: performance.now() - start,
          status: "error",
        });
        throw new Error("Failed to fetch resume descriptions");
      }

      const payload = (await response.json()) as ApiSuccess<DescriptionsQueryResponse>;
      trackQueryMetric({
        key: "resume-descriptions",
        durationMs: performance.now() - start,
        status: "success",
      });
      return payload.data;
    },
    initialData,
  });
}
