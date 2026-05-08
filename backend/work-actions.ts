"use server";

import { sql } from "@vercel/postgres";
import { unstable_cache } from "next/cache";
import { Work } from "@/types/work";
import { CACHE_TAGS } from "@/lib/cache-tags";
import { AppError, ERROR_CODES } from "@/lib/errors";

export async function getWorksData(): Promise<Work[]> {
  const getCachedWorksData = unstable_cache(
    async () => {
      const { rows }: { rows: Work[] } =
        await sql`SELECT id, title, description, skill, path, url, download, git, index FROM works_contents ORDER BY path DESC;`;
      return rows;
    },
    ["works-data"],
    { revalidate: 60, tags: [CACHE_TAGS.work] }
  );

  try {
    return await getCachedWorksData();
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch works data",
      status: 500,
      details: { source: "getWorksData" },
    });
  }
}
