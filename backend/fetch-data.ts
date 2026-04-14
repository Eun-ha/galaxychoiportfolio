import { Main, Skill } from "@/types/main";
import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import { Work } from "@/types/work";
import { sql } from "@vercel/postgres";
import { unstable_cache, unstable_noStore as noStore } from "next/cache";
import { CACHE_TAGS } from "@/lib/cache-tags";

type ProjectData =
  | Certificate
  | Education
  | Experience
  | Description
  | Work
  | Main
  | Skill;

type ProjectSlug =
  | "certificates"
  | "educations"
  | "experiences"
  | "descriptions"
  | "work"
  | "skill"
  | "main";

type ProjectResolver = (id: string) => Promise<{ rows: ProjectData[]; rowCount: number | null }>;

const projectResolverBySlug: Record<ProjectSlug, ProjectResolver> = {
  certificates: (id) =>
    sql<Certificate>`
      SELECT
        id,
        name,
        date,
        authority
      FROM certificates_contents
      WHERE certificates_contents.id = ${id};
    `,
  educations: (id) =>
    sql<Education>`
      SELECT
        id,
        school,
        degree,
        institution,
        date
      FROM educations_contents
      WHERE educations_contents.id = ${id};
    `,
  experiences: (id) =>
    sql<Experience>`
      SELECT
        id,
        company,
        title,
        date,
        description
      FROM experiences_contents
      WHERE experiences_contents.id = ${id};
    `,
  descriptions: (id) =>
    sql<Description>`
      SELECT
        id,
        title,
        date,
        performance,
        role,
        skills
      FROM descriptions_contents
      WHERE descriptions_contents.id = ${id};
    `,
  work: (id) =>
    sql<Work>`
      SELECT
        id,
        title,
        description,
        skill,
        path,
        url,
        download,
        git,
        index
      FROM works_contents
      WHERE works_contents.id = ${id};
    `,
  skill: (id) =>
    sql<Skill>`
      SELECT
        id,
        color,
        skills,
        name,
        angle
      FROM skill_contents
      WHERE skill_contents.id = ${id};
    `,
  main: (id) =>
    sql<Main>`
      SELECT
        id,
        title,
        content1,
        content2,
        description,
        description2,
        description3,
        button,
        path,
        alt,
        url
      FROM main_contents
      WHERE main_contents.id = ${id};
    `,
};

function isProjectSlug(slug: string): slug is ProjectSlug {
  return slug in projectResolverBySlug;
}

export async function fetchProjectById(
  slug: string,
  id: string
): Promise<ProjectData | null> {
  noStore();

  if (!slug || !isProjectSlug(slug)) {
    throw new Error("Invalid slug");
  }

  if (!id) {
    throw new Error("Invalid id");
  }

  try {
    const data = await projectResolverBySlug[slug](id);

    if (!data || data.rowCount === 0) {
      throw new Error("No data found");
    }

    return data.rows[0] ?? null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project data.");
  }
}

const PROJECTS_PER_PAGE = 4;

export async function fetchProjectsPages(
  currentPage: number
): Promise<Description[]> {
  const getCachedProjectsPages = unstable_cache(
    async (page: number) => {
      const offset = (page - 1) * PROJECTS_PER_PAGE;

      const { rows }: { rows: Description[] } =
        await sql`SELECT id, title, date, performance, role, skills FROM descriptions_contents ORDER BY date DESC LIMIT ${PROJECTS_PER_PAGE} OFFSET ${offset};`;
      return rows;
    },
    ["resume-project-pages"],
    {
      revalidate: 60,
      tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.descriptions],
    }
  );

  try {
    return await getCachedProjectsPages(currentPage);
  } catch (error) {
    throw new Error("Failed to fetch getDescriptionsData data");
  }
}

export async function fetchProjectsSlide(currentPage: number): Promise<Work[]> {
  try {
    const { rows }: { rows: Work[] } =
      await sql`SELECT id, title, description, skill, path, url, download, git, index FROM works_contents LIMIT 1 OFFSET ${currentPage};`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getDescriptionsData data");
  }
}
