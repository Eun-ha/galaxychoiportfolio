"use server";

import { sql } from "@vercel/postgres";
import { unstable_cache } from "next/cache";
import { Main, Skill } from "@/types/main";
import { CACHE_TAGS } from "@/lib/cache-tags";

/**
 * Main
 */

export async function getMainData(): Promise<Main[]> {
  const getCachedMainData = unstable_cache(
    async () => {
      const { rows }: { rows: Main[] } =
        await sql`SELECT id, title, content1, content2, description, description2, description3, button, path, alt, url FROM main_contents ORDER BY path ASC;`;
      return rows;
    },
    ["main-data"],
    { revalidate: 60, tags: [CACHE_TAGS.main] }
  );

  try {
    return await getCachedMainData();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch getMainData data");
  }
}

/**
 * Skills
 */

export async function getSkillData(): Promise<Skill[]> {
  const getCachedSkillData = unstable_cache(
    async () => {
      const { rows }: { rows: Skill[] } =
        await sql`SELECT id, color::int, skills::int, name, angle::int FROM skill_contents ORDER BY created_at ASC;`;
      return rows;
    },
    ["skill-data"],
    { revalidate: 60, tags: [CACHE_TAGS.skill] }
  );

  try {
    return await getCachedSkillData();
  } catch (error) {
    throw new Error("Failed to fetch getSkillData data");
  }
}
