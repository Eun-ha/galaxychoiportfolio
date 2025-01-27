import { Carousel } from "@/components/carousel";
import { fetchData } from "@/lib/utils";
export const dynamic = "force-dynamic";

export default async function Work() {
  const ApiUrl = process.env.API_URL;
  const data = await fetchData(`${ApiUrl}/api/work`);

  return (
    <main className="mx-2 my-6 lg:mx-[120px] lg:my-[100px]">
      <Carousel data={data} />
    </main>
  );
}
