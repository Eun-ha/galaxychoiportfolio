"use server";
import {
  Certificate,
  Description,
  Experience,
  Education,
} from "@/types/resume";
import { sql } from "@vercel/postgres";

export async function getCertificatesData(): Promise<Certificate[]> {
  try {
    const { rows }: { rows: Certificate[] } =
      await sql`SELECT name, date, authority FROM certificates_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getDescriptionsData(): Promise<Description[]> {
  try {
    const { rows }: { rows: Description[] } =
      await sql`SELECT title, date, performance, role, skills FROM descriptions_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    const { rows }: { rows: Experience[] } =
      await sql`SELECT company, title, date, description FROM experiences_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getEducationsData(): Promise<Education[]> {
  try {
    const { rows }: { rows: Education[] } =
      await sql`SELECT school, degree, institution, date FROM educations_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}
