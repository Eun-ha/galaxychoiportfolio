"use server";

import { sql } from "@vercel/postgres";
import { unstable_cache } from "next/cache";
import {
  Certificate,
  Description,
  Experience,
  Education,
} from "@/types/resume";
import { CACHE_TAGS } from "@/lib/cache-tags";
import { AppError, ERROR_CODES } from "@/lib/errors";

const getCachedCertificatesData = unstable_cache(
  async () => {
    const { rows }: { rows: Certificate[] } = await sql`
        SELECT id, date, name, authority
        FROM certificates_contents
        ORDER BY date DESC;
      `;
    return rows;
  },
  ["resume-certificates-data"],
  {
    revalidate: 60,
    tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.certificates],
  }
);

export async function getCertificatesData(): Promise<Certificate[]> {
  try {
    return await getCachedCertificatesData();
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch certificates data",
      status: 500,
      details: { source: "getCertificatesData" },
    });
  }
}

const getCachedDescriptionsData = unstable_cache(
  async () => {
    const { rows }: { rows: Description[] } =
      await sql`SELECT id, title, date, performance, role, skills FROM descriptions_contents ORDER BY date DESC ;`;
    return rows;
  },
  ["resume-descriptions-data"],
  {
    revalidate: 60,
    tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.descriptions],
  }
);

export async function getDescriptionsData(): Promise<Description[]> {
  try {
    return await getCachedDescriptionsData();
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch descriptions data",
      status: 500,
      details: { source: "getDescriptionsData" },
    });
  }
}

const getCachedExperiencesData = unstable_cache(
  async () => {
    const { rows }: { rows: Experience[] } =
      await sql`SELECT id, company, title, date, description FROM experiences_contents ORDER BY date DESC;`;
    return rows;
  },
  ["resume-experiences-data"],
  {
    revalidate: 60,
    tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.experiences],
  }
);

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    return await getCachedExperiencesData();
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch experiences data",
      status: 500,
      details: { source: "getExperiencesData" },
    });
  }
}

const getCachedEducationsData = unstable_cache(
  async () => {
    const { rows }: { rows: Education[] } =
      await sql`SELECT id, school, degree, institution, date FROM educations_contents ORDER BY date DESC;`;
    return rows;
  },
  ["resume-educations-data"],
  {
    revalidate: 60,
    tags: [CACHE_TAGS.resume.all, CACHE_TAGS.resume.educations],
  }
);

export async function getEducationsData(): Promise<Education[]> {
  try {
    return await getCachedEducationsData();
  } catch (error) {
    throw new AppError({
      code: ERROR_CODES.DB_QUERY_FAILED,
      message: "Failed to fetch educations data",
      status: 500,
      details: { source: "getEducationsData" },
    });
  }
}
