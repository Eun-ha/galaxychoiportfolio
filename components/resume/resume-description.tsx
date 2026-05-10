"use client";

import { Description } from "@/types/resume";
import { SkeletonCard } from "../ui/skeleton-card";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { ResumeDescriptionDesktop } from "./resume-description-desktop";
import { ResumeDescriptionMobile } from "./resume-description-mobile";
import { DescMeta } from "@/app/resume/[slug]/page";

type Props = {
  data: Description[];
  descMeta?: DescMeta;
};

export const ResumeDescription = ({ data, descMeta }: Props) => {
  const isMobile = useIsMobile();

  if (isMobile === null) return <SkeletonCard />;

  return isMobile ? (
    <ResumeDescriptionMobile data={data} descMeta={descMeta} />
  ) : (
    <ResumeDescriptionDesktop data={data} descMeta={descMeta} />
  );
};
