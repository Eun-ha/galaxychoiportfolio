"use server";

import { sql } from "@vercel/postgres";
import { Work } from "@/types/work";

export async function getWorksData(): Promise<Work[]> {
  try {
    const { rows }: { rows: Work[] } =
      await sql`SELECT id, title, description, skill, path, url, download, git, index FROM works_contents ORDER BY path DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getWorksData data");
  }
}
