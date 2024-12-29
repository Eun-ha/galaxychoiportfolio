import { ResumeAside } from "@/components/resume-aside";
import ResumeMain from "@/components/resume-main";
import { fetchData } from "@/lib/utils";

export default async function Resume() {
  const data = await fetchData("http://localhost:3000/api/resume");

  return (
    <div>
      <ResumeMain data={data} />
    </div>
  );
}
