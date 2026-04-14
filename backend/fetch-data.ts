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
import { AppError, ERROR_CODES } from "@/lib/errors";

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
    throw new AppError({
      code: ERROR_CODES.INVALID_PARAM,
      message: "Invalid slug",
      status: 400,
    });
  }

  if (!id) {
    throw new AppError({
      code: ERROR_CODES.INVALID_PARAM,
      message: "Invalid id",
      status: 400,
    });
  }

  try {
    const data = await projectResolverBySlug[slug](id);

    if (!data || data.rowCount === 0) {
      throw new AppError({
        code: ERROR_CODES.NOT_FOUND,
        message: "No data found",
        status: 404,
      });
    }

    return data.rows[0] ?? null;
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch project data.",
      status: 500,
      details: { source: "fetchProjectById" },
    });
  }
}

const PROJECTS_PER_PAGE = 4;
export type PaginatedDescriptions = {
  items: Description[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

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
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch descriptions data",
      status: 500,
      details: { source: "fetchProjectsPages" },
    });
  }
}

export async function fetchDescriptionsByQuery({
  currentPage,
  pageSize = PROJECTS_PER_PAGE,
  query,
}: {
  currentPage: number;
  pageSize?: number;
  query?: string;
}): Promise<PaginatedDescriptions> {
  const getCachedDescriptionsByQuery = unstable_cache(
    async (page: number, limit: number, searchQuery: string) => {
      const offset = (page - 1) * limit;
      const term = `%${searchQuery}%`;

      const { rows: countRows } = await sql<{ count: string }>`
        SELECT COUNT(*)::text AS count
        FROM descriptions_contents
        WHERE
          (${searchQuery} = '' OR title ILIKE ${term} OR skills ILIKE ${term});
      `;

      const count = countRows[0]?.count ?? "0";
      const totalCount = Number(count ?? "0");
      const totalPages = Math.max(1, Math.ceil(totalCount / limit));

      const { rows }: { rows: Description[] } = await sql`
        SELECT id, title, date, performance, role, skills
        FROM descriptions_contents
        WHERE
          (${searchQuery} = '' OR title ILIKE ${term} OR skills ILIKE ${term})
        ORDER BY date DESC
        LIMIT ${limit}
        OFFSET ${offset};
      `;

      return {
        items: rows,
        totalCount,
        totalPages,
        currentPage: page,
      };
    },
    ["resume-descriptions-by-query"],
    {
      revalidate: 60,
      tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.descriptions],
    }
  );

  try {
    return await getCachedDescriptionsByQuery(
      currentPage,
      pageSize,
      query?.trim() ?? ""
    );
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch descriptions with query",
      status: 500,
      details: { source: "fetchDescriptionsByQuery" },
    });
  }
}

export async function fetchDescriptionsByQuery({
  currentPage,
  pageSize = PROJECTS_PER_PAGE,
  query,
}: {
  currentPage: number;
  pageSize?: number;
  query?: string;
}): Promise<PaginatedDescriptions> {
  const getCachedDescriptionsByQuery = unstable_cache(
    async (page: number, limit: number, searchQuery: string) => {
      const offset = (page - 1) * limit;
      const term = `%${searchQuery}%`;

      const { rows: countRows } = await sql<{ count: string }>`
        SELECT COUNT(*)::text AS count
        FROM descriptions_contents
        WHERE
          (${searchQuery} = '' OR title ILIKE ${term} OR skills ILIKE ${term});
      `;

      const count = countRows[0]?.count ?? "0";
      const totalCount = Number(count ?? "0");
      const totalPages = Math.max(1, Math.ceil(totalCount / limit));

      const { rows }: { rows: Description[] } = await sql`
        SELECT id, title, date, performance, role, skills
        FROM descriptions_contents
        WHERE
          (${searchQuery} = '' OR title ILIKE ${term} OR skills ILIKE ${term})
        ORDER BY date DESC
        LIMIT ${limit}
        OFFSET ${offset};
      `;

      return {
        items: rows,
        totalCount,
        totalPages,
        currentPage: page,
      };
    },
    ["resume-descriptions-by-query"],
    {
      revalidate: 60,
      tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.descriptions],
    }
  );

  try {
    return await getCachedDescriptionsByQuery(
      currentPage,
      pageSize,
      query?.trim() ?? ""
    );
  } catch (error) {
    throw new Error("Failed to fetch descriptions with query");
  }
}

export async function fetchProjectsSlide(currentPage: number): Promise<Work[]> {
  try {
    const { rows }: { rows: Work[] } =
      await sql`SELECT id, title, description, skill, path, url, download, git, index FROM works_contents LIMIT 1 OFFSET ${currentPage};`;
    return rows;
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch works slide data",
      status: 500,
      details: { source: "fetchProjectsSlide" },
    });
  }
}
