"use server";

import { sql } from "@vercel/postgres";
import { Main, Skill } from "@/types/main";

/**
 * Main
 */

export async function getMainData(): Promise<Main[]> {
  try {
    const { rows }: { rows: Main[] } =
      await sql`SELECT id, title, content1, content2, description, description2, description3, button, path, alt, url FROM main_contents ORDER BY path ASC;`;
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch getMainData data");
  }
}

/**
 * Skills
 */

export async function getSkillData(): Promise<Skill[]> {
  try {
    const { rows }: { rows: Skill[] } =
      await sql`SELECT id, color::int, skills::int, name, angle::int FROM skill_contents ORDER BY created_at ASC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getSkillData data");
  }
}
