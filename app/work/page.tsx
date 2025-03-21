import { Carousel } from "@/components/work/carousel";
import { fetchData } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "작업물",
  description:
    "대표 작업물에 대한 설명과 함께 링크, 소스 다운로드 경로, 깃 경로를 제공합니다.",
};

export const revalidate = 3;

export default async function Work() {
  const ApiUrl = process.env.PRODUCTION_URL;
  const data = await fetchData(`${ApiUrl}/api/work`);

  return <Carousel data={data} />;
}
