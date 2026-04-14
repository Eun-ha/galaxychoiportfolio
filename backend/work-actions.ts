"use server";

import { sql } from "@vercel/postgres";
import { unstable_cache } from "next/cache";
import { Work } from "@/types/work";
import { CACHE_TAGS } from "@/lib/cache-tags";

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
    throw new Error("Failed to fetch getWorksData data");
  }
}
