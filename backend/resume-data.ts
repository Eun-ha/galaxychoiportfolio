import { Certificate } from "@/types/resume";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProjectById(id: string) {
  noStore();

  try {
    const data = await sql<Certificate>`
      SELECT
        certificates_contents.id,
        certificates_contents.name,
        certificates_contents.date,
        certificates_contents.authority
      FROM certificates_contents
      WHERE certificates_contents.id = ${id};
    `;

    const project = data.rows.map((project) => ({
      ...project,
    }));

    console.log(project[0]);
    return project[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}
