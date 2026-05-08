"use server";

import { fetchDescriptionsByQuery } from "@/backend/fetch-data";

export async function getDescriptionsByQuery({
  page,
  pageSize = 4,
  query = "",
}: {
  page: number;
  pageSize?: number;
  query?: string;
}) {
  const normalizedPage = Number.isNaN(page) || page < 1 ? 1 : page;
  const normalizedPageSize = Number.isNaN(pageSize) || pageSize < 1 ? 4 : pageSize;

  return fetchDescriptionsByQuery({
    currentPage: normalizedPage,
    pageSize: normalizedPageSize,
    query,
  });
}
