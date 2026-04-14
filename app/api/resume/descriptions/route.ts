import { fetchDescriptionsByQuery } from "@/backend/fetch-data";
import { getDescriptionsData } from "@/backend/resume-actions";
import { withApiHandler } from "@/lib/with-api-handler";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = Number(searchParams.get("pageSize") ?? "4");

  if (searchParams.has("page") || searchParams.has("query")) {
    return withApiHandler(
      () =>
        fetchDescriptionsByQuery({
          currentPage: Number.isNaN(page) || page < 1 ? 1 : page,
          pageSize: Number.isNaN(pageSize) || pageSize < 1 ? 4 : pageSize,
          query,
        }),
      "Error fetching paginated description data:"
    );
  }

  return withApiHandler(getDescriptionsData, "Error fetching description data:");
}
