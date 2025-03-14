"use server";

import { sql } from "@vercel/postgres";

export interface Posts {
  id: number;
  title: string;
  content: string;
  author: string;
}

export async function getPostsData(): Promise<Posts[]> {
  try {
    const { rows }: { rows: Posts[] } =
      await sql`SELECT id, title, content, author FROM posts;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}
