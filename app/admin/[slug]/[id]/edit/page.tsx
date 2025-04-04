import { fetchProjectById } from "@/backend/resume-data";
import EditCertificateForm from "@/components/admin/edit-form";
import { notFound } from "next/navigation";
import React from "react";

type tParams = Promise<{ slug: string; id: string }>;

export default async function Page(props: { params: tParams }) {
  const { id } = await props.params;

  let project;

  try {
    project = await fetchProjectById(id); // fetchProjectById 함수를 호출하여 프로젝트를 가져옵니다.
    if (!project) {
      notFound();
      return; // 프로젝트가 없으면 함수를 종료합니다.
    }
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error(error.message);
    }
    notFound();
    return; // 오류가 발생하면 함수를 종료합니다.
  }

  return <EditCertificateForm project={project} />;
}
