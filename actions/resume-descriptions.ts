"use server";

import { fetchDescriptionsByQuery } from "@/backend/fetch-data";
import { DESCRIPTIONS_PAGE_SIZE } from "@/lib/constants";

export async function getDescriptionsByQuery({
  page,
  pageSize = DESCRIPTIONS_PAGE_SIZE,
}: {
  page: number;
  pageSize?: number;
}) {
  const normalizedPage = Number.isNaN(page) || page < 1 ? 1 : page;
  const normalizedPageSize = Number.isNaN(pageSize) || pageSize < 1 ? DESCRIPTIONS_PAGE_SIZE : pageSize;

  return fetchDescriptionsByQuery({
    currentPage: normalizedPage,
    pageSize: normalizedPageSize,
    query: "",
  });
}
