import { Carousel } from "@/components/carousel";
import { fetchData } from "@/lib/utils";
export const dynamic = "force-dynamic";

export default async function Work() {
  const ApiUrl = process.env.API_URL;
  const data = await fetchData(`${ApiUrl}/api/work`);

  return (
    <main>
      <Carousel data={data} />
    </main>
  );
}
