"use client";

import { Description } from "@/types/resume";
import { useQuery } from "@tanstack/react-query";

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
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
      });

      if (query.trim()) {
        params.set("query", query.trim());
      }

      const response = await fetch(`/api/resume/descriptions?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch resume descriptions");
      }

      return response.json();
    },
    initialData,
  });
}
