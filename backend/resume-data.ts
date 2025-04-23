import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProjectById(
  slug: string,
  id: string
): Promise<Certificate | Education | Experience | Description | null> {
  noStore();

  if (!slug) {
    throw new Error("Invalid slug");
  }
  if (!id) {
    throw new Error("Invalid id");
  }

  let data = null;
  if (slug === "certificates") {
    data = await sql<Certificate>`
      SELECT
        id,
        name,
        date,
        authority
      FROM certificates_contents
      WHERE certificates_contents.id = ${id};
    `;
  } else if (slug === "educations") {
    data = await sql<Education>`
      SELECT
        id,
        school,
        degree,
        institution,
        date
      FROM educations_contents
      WHERE educations_contents.id = ${id};
    `;
  } else if (slug === "experiences") {
    data = await sql<Experience>`
      SELECT
        id,
        company,
        title,
        date,
        description
      FROM experiences_contents
      WHERE experiences_contents.id = ${id};
    `;
  } else if (slug === "descriptions") {
    data = await sql<Description>`
      SELECT
        id,
        title,
        date,
        performance,
        role,
        skills
      FROM descriptions_contents
      WHERE descriptions_contents.id = ${id};
    `;
  } else {
    throw new Error("Invalid slug");
  }

  try {
    if (!data || data.rowCount === 0) {
      throw new Error("No data found");
    }

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
