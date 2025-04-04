"use server";

import {
  Certificate,
  Description,
  Experience,
  Education,
} from "@/types/resume";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

export async function getCertificatesData(): Promise<Certificate[]> {
  try {
    const { rows }: { rows: Certificate[] } =
      await sql`SELECT id, name, date, authority FROM certificates_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getDescriptionsData(): Promise<Description[]> {
  try {
    const { rows }: { rows: Description[] } =
      await sql`SELECT id, title, date, performance, role, skills FROM descriptions_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    const { rows }: { rows: Experience[] } =
      await sql`SELECT id, company, title, date, description FROM experiences_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}

export async function getEducationsData(): Promise<Education[]> {
  try {
    const { rows }: { rows: Education[] } =
      await sql`SELECT id, school, degree, institution, date FROM educations_contents;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
}
/**
 * Create a new Description
 * @param preState - The previous state of the Description  form  state
 * @param formData - The form data to create a new Description
 * @returns The new state of the Description form state and a message to display  to the user
 */
const CreateDescriptionSchema = z.object({
  title: z.string(),
  date: z.string(),
  performance: z.string(),
  role: z.string(),
  skills: z.string(),
});
/*
export type DescriptionState = {
  errors?: {
    title?: string[];
    date?: string[];
    performance?: string[];
    role?: string[];
    skills?: string[];
  };
  message?: string;
};*/

export async function createDescription(
  preState: DescriptionState,
  formData: FormData
) {
  const validatedFields = CreateDescriptionSchema.safeParse({
    title: formData.get("title"),
    date: formData.get("date"),
    performance: formData.get("performance"),
    role: formData.get("role"),
    skills: formData.get("skills"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingDescription =
      await sql`SELECT * FROM descriptions_contents WHERE title = ${validatedFields.data.title};`;
    if (existingDescription.rows.length > 0) {
      return {
        message: "Description already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Description validation",
    };
  }

  try {
    await sql`
      INSERT INTO descriptions_contents (title, date, performance, role, skills)
      VALUES (${validatedFields.data.title}, ${validatedFields.data.date}, ${validatedFields.data.performance}, ${validatedFields.data.role}, ${validatedFields.data.skills});
    `;
    return {
      message: "Description created successfully",
    };
  } catch (error) {
    return {
      message: "Failed to create Description",
    };
  }
}

/**
 * Certificates
 */

const CreateCertificateSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  date: z.string().nonempty({ message: "Date is required" }),
  authority: z.string().nonempty({ message: "Authority is required" }),
});

export type CertificateState = {
  errors?: {
    name?: string[];
    date?: string[];
    authority?: string[];
  };
  message?: string;
};

export async function createCertificate(
  preState: CertificateState,
  formData: FormData
) {
  const validatedFields = CreateCertificateSchema.safeParse({
    name: formData.get("name"),
    date: formData.get("date"),
    authority: formData.get("authority"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingCertificate =
      await sql`SELECT * FROM certificates_contents WHERE name = ${validatedFields.data.name};`;
    if (existingCertificate.rows.length > 0) {
      return {
        message: "Certificate already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Certificate validation",
    };
  }

  try {
    await sql`
      INSERT INTO certificates_contents (name, date, authority)
      VALUES (${validatedFields.data.name}, ${validatedFields.data.date}, ${validatedFields.data.authority});
    `;
    console.log("createCertificate 호출됨");

    revalidatePath("/admin/certificates");
  } catch (error) {
    return {
      message: "Failed to create Certificate",
    };
  }

  redirect("/admin/certificates");
}

export async function deleteCertificate(id: string) {
  console.log("deleteCertificate");
  console.log(typeof id);
  try {
    await sql`DELETE FROM certificates_contents WHERE id = ${id};`;
    revalidatePath("/admin/certificates");
    return {
      message: "Certificate deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Certificate",
    };
  }
}

export async function editCertificate(
  id: string | undefined,
  preState: CertificateState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateCertificateSchema.safeParse({
    name: formData.get("name"),
    date: formData.get("date"),
    authority: formData.get("authority"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    await sql`
      UPDATE certificates_contents SET name = ${validatedFields.data.name}, date = ${validatedFields.data.date}, authority = ${validatedFields.data.authority} WHERE id = ${id}
    `;
    revalidatePath("/admin/certificates");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Certificate",
    };
  }
  redirect("/admin/certificates");
}

/**
 * Educations
 */

const CreateEducationsSchema = z.object({
  school: z.string().nonempty({ message: "school is required" }),
  degree: z.string().nonempty({ message: "degree is required" }),
  institution: z.string().nonempty({ message: "institution is required" }),
  date: z.string().nonempty({ message: "date is required" }),
});

export type EducationState = {
  errors?: {
    school?: string[];
    degree?: string[];
    institution?: string[];
    date?: string[];
  };
  message?: string;
};

export async function createEducations(
  preState: EducationState,
  formData: FormData
) {
  const validatedFields = CreateEducationsSchema.safeParse({
    school: formData.get("school"),
    degree: formData.get("degree"),
    institution: formData.get("institution"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingEducation =
      await sql`SELECT * FROM educations_contents WHERE school = ${validatedFields.data.school};`;
    if (existingEducation.rows.length > 0) {
      return {
        message: "Education already exists",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Database error during Education validation",
    };
  }

  try {
    await sql`
      INSERT INTO educations_contents (school, degree, institution, date)
      VALUES (${validatedFields.data.school}, ${validatedFields.data.degree}, ${validatedFields.data.institution}, ${validatedFields.data.date});
    `;
    revalidatePath("/admin/educations");
    console.log("createEducations 호출됨");
  } catch (error) {
    return {
      message: "Failed to create Education",
    };
  }
  redirect("/admin/educations");
}

export async function editEducations(
  id: string | undefined,
  preState: EducationState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateEducationsSchema.safeParse({
    school: formData.get("school"),
    degree: formData.get("degree"),
    institution: formData.get("institution"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    await sql`
      UPDATE educations_contents SET name = ${validatedFields.data.school}, ${validatedFields.data.degree}, date = ${validatedFields.data.institution}, authority = ${validatedFields.data.date} WHERE id = ${id}
    `;
    revalidatePath("/admin/educations");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit educations",
    };
  }
  redirect("/admin/educations");
}

export type ExperienceState = {
  errors?: {
    name?: string[];
    date?: string[];
    authority?: string[];
  };
  message?: string;
};

export type DescriptionState = {
  errors?: {
    name?: string[];
    date?: string[];
    authority?: string[];
  };
  message?: string;
};

export async function createDescriptions() {
  console.log("createDescriptions");
}

export async function createExperiences() {
  console.log("createExperiences");
}
