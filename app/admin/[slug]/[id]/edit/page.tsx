import { fetchProjectById } from "@/backend/resume-data";
import EditForm from "@/components/admin/edit-form";
import { notFound } from "next/navigation";
import React from "react";

type tParams = Promise<{ slug: string; id: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug, id } = await props.params;

  let project;

  try {
    project = await fetchProjectById(slug, id);
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

  return <EditForm project={project} slug={slug} />;
}
