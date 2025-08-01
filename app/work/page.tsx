import { Carousel } from "@/components/work/carousel";
import { Metadata } from "next";
import type { Work } from "@/types/work";
import { Suspense } from "react";
import { SkeletonSlide } from "@/components/ui/skeleton-slide";

export const metadata: Metadata = {
  title: "작업물",
  description:
    "대표 작업물에 대한 설명과 함께 링크, 소스 다운로드 경로, 깃 경로를 제공합니다.",
};

export default async function Work() {
  //const ApiUrl = process.env.PRODUCTION_URL;
  //const data = await fetchData(`${ApiUrl}/api/work`);

  const ApiUrl = process.env.API_URL || "http://localhost:3000";
  let data: Work[] = [];
  const res = await fetch(`${ApiUrl}/api/work`, {
    next: { revalidate: 60 }, // 60초마다 재생성
  });
  data = await res.json();

  return (
    <>
      <Suspense fallback={<SkeletonSlide />}>
        <Carousel data={data} />
      </Suspense>
    </>
  );
}
