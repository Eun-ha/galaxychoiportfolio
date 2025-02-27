import { fetchData } from "@/lib/utils";
import { AsideButtonList } from "./aside-button-list";
import { Aside } from "@/data/resume";

export async function ResumeAside() {
  const ApiUrl = process.env.PRODUCTION_URL;
  const data = await fetchData(`${ApiUrl}/api/resume/aside`);

  console.log("resume-aside-server");

  return (
    <>
      <AsideButtonList
        path="/resume"
        categories={[
          ...data.map((x: Aside) => ({
            button: x.button,
            slug: x.slug,
          })),
        ]}
      />
    </>
  );
}
