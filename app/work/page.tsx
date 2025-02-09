import { Carousel } from "@/components/work/carousel";
import { fetchData } from "@/lib/utils";
export const dynamic = "force-dynamic";

export default async function Work() {
  const data = await getProjects();
  console.log("Work");
  return (
    <main>
      <Carousel data={data} />
    </main>
  );
}

async function getProjects() {
  const ApiUrl = process.env.API_URL;
  const data = await fetchData(`${ApiUrl}/api/work`);
  console.log("getProjects");
  return data;
}
