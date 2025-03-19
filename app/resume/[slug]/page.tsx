import { ResumeContents } from "@/components/resume/resume-contents";
import { TitlesDescriptions } from "@/components/resume/titles-descriptions";
import { fetchData } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

import {
  getCertificatesData,
  getDescriptionsData,
  getExperiencesData,
  getEducationsData,
} from "@/backend/resume-actions";

import {
  Certificate,
  Education,
  Experience,
  Description,
} from "@/types/resume";

type tParams = Promise<{ slug: string }>;
type Props = {
  params: Promise<{ slug: string }>;
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

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;
  //const ApiUrl = process.env.PRODUCTION_URL;
  //const data = await fetchData(`${ApiUrl}/api/resume/${slug}`);

  let data: Description[] | Education[] | Experience[] | Certificate[] = [];

  if (slug === "certificates") {
    data = await getCertificatesData();
  } else if (slug === "descriptions") {
    data = await getDescriptionsData();
  } else if (slug === "experiences") {
    data = await getExperiencesData();
  } else if (slug === "educations") {
    data = await getEducationsData();
  }

  return (
    <main className="block w-full lg:w-[calc(100%-16px)] lg:ml-[16px]">
      <TitlesDescriptions slug={slug} />
      <ResumeContents slug={slug} data={data} />
    </main>
  );
}
