import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "경력기술서, 경력, 교육, 자격증 등의 정보를 제공합니다.",
};

export default async function Page() {
  return <div>Resume 페이지 입니다.</div>;
}
