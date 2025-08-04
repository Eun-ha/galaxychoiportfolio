"use server";

import { sql } from "@vercel/postgres";
import {
  Certificate,
  Description,
  Experience,
  Education,
} from "@/types/resume";

export async function getCertificatesData(): Promise<Certificate[]> {
  try {
    const { rows }: { rows: Certificate[] } = await sql`
        SELECT id, date, name, authority
        FROM certificates_contents 
        ORDER BY date DESC;
      `;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getCertificatesData data");
  }
}

export async function getDescriptionsData(): Promise<Description[]> {
  try {
    const { rows }: { rows: Description[] } =
      await sql`SELECT id, title, date, performance, role, skills FROM descriptions_contents ORDER BY date DESC ;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getDescriptionsData data");
  }
}

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    const { rows }: { rows: Experience[] } =
      await sql`SELECT id, company, title, date, description FROM experiences_contents ORDER BY date DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getExperiencesData data");
  }
}

export async function getEducationsData(): Promise<Education[]> {
  try {
    const { rows }: { rows: Education[] } =
      await sql`SELECT id, school, degree, institution, date FROM educations_contents ORDER BY date DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getEducationsData data");
  }
}
