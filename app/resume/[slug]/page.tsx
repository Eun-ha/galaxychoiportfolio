import { ResumeContents } from "@/components/resume/resume-contents";
import { TitlesDescriptions } from "@/components/resume/titles-descriptions";
import React from "react";
import {
  getCertificatesData,
  getEducationsData,
  getExperiencesData,
} from "@/backend/resume-actions";
import { fetchDescriptionsByQuery } from "@/backend/fetch-data";

import {
  Certificate,
  Education,
  Experience,
  Description,
} from "@/types/resume";

const DESCRIPTIONS_PAGE_SIZE = 4;

type tParams = Promise<{ slug: string }>;
type tSearchParams = Promise<{ query?: string; page?: string }>;

export type DescMeta = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export default async function Page(
  props: { params: tParams } & { searchParams: tSearchParams }
) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams?.page) || 1;

  let data: Description[] | Education[] | Experience[] | Certificate[] = [];
  let descMeta: DescMeta | undefined;

  if (slug === "certificates") {
    data = await getCertificatesData();
  } else if (slug === "descriptions") {
    const result = await fetchDescriptionsByQuery({
      currentPage,
      pageSize: DESCRIPTIONS_PAGE_SIZE,
      query: "",
    });
    data = result.items;
    descMeta = {
      totalCount: result.totalCount,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    };
  } else if (slug === "experiences") {
    data = await getExperiencesData();
  } else if (slug === "educations") {
    data = await getEducationsData();
  }

  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions slug={slug} />
      <ResumeContents slug={slug} data={data} descMeta={descMeta} />
    </main>
  );
}
