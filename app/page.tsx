import Decoration from "@/components/main/decoration";
import HomeAbout from "@/components/main/home-about";
import HomeContact from "@/components/main/home-contact";
import HomeMain from "@/components/main/home-main";
import { HomeParticles } from "@/components/main/home-particles";
import HomeSkills from "@/components/main/home-skills";
import ScrollTrackerNav from "@/components/main/scroll-tracker-nav";
import { fetchData } from "@/lib/utils";

export default async function Home() {
  const mainData = await getProjects();
  console.log("Home");

  return (
    <div className="relative z-30 bg-darkOnly-bg h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <div id="00" className="py-10 lg:py-[150px]">
        <HomeMain data={mainData} />
        <HomeParticles />
      </div>
      <div id="01" className="py-10 lg:py-[150px]">
        <HomeAbout data={mainData} />
      </div>
      <div id="02" className="py-10 lg:py-[150px]">
        <HomeSkills data={mainData} />
      </div>
      <div id="03" className="py-10 lg:py-[150px]">
        <HomeContact />
      </div>
      <ScrollTrackerNav />
      <Decoration />
    </div>
  );
}

async function getProjects() {
  const ApiUrl = process.env.API_URL;
  const mainData = await fetchData(`${ApiUrl}/api/main`);
  console.log("getProjects");
  return mainData;
}
