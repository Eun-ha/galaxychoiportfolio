import { ResumeContents } from "@/components/resume/resume-contents";
import { TitlesDescriptions } from "@/components/resume/titles-descriptions";
import { apiUrl, fetchData } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

import {
  Certificate,
  Education,
  Experience,
  Description,
} from "@/types/resume";
import { fetchProjectsPages } from "@/backend/fetch-data";

type tParams = Promise<{ slug: string }>;
type tSearchParams = Promise<{ query?: string; page?: string }>;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ query?: string; page?: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const ApiUrl = process.env.PRODUCTION_URL;
  const slug = (await params).slug;

  const product = await fetchData(`${ApiUrl}/api/resume/${slug}`)
    .then((res) => res.length && res[0].meta)
    .catch((error) => console.log(error));

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: ["/opengraph-image.jpg", ...previousImages],
    },
  };
}

export default async function Page(
  props: { params: tParams } & { searchParams: tSearchParams }
) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams?.page) || 1;

  let AllDescription: Description[] = [];
  const res = await fetch(`${apiUrl}/api/resume/descriptions`, {
    next: { revalidate: 60 }, // 60초마다 재생성
  });
  AllDescription = await res.json();

  let data: Description[] | Education[] | Experience[] | Certificate[] = [];

  if (slug === "certificates") {
    const response = await fetch(`${apiUrl}/api/resume/certificates`, {
      next: { revalidate: 60 }, // 60초마다 재생성
    });
    data = await response.json();
  } else if (slug === "descriptions") {
    data = await fetchProjectsPages(currentPage);
  } else if (slug === "experiences") {
    const response = await fetch(`${apiUrl}/api/resume/experiences`, {
      next: { revalidate: 60 }, // 60초마다 재생성
    });
    data = await response.json();
  } else if (slug === "educations") {
    const response = await fetch(`${apiUrl}/api/resume/educations`, {
      next: { revalidate: 60 }, // 60초마다 재생성
    });
    data = await response.json();
  }

  console.log("Resume Data:", data); // Debugging log
  console.log("All Description Data:", AllDescription); // Debugging log

  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions slug={slug} />
      <ResumeContents slug={slug} data={data} allDesc={AllDescription} />
    </main>
  );
}
