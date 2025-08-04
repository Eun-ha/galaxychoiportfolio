import { getMainData, getSkillData } from "@/backend/main-actions";
import Decoration from "@/components/main/decoration";
import HomeAbout from "@/components/main/home-about";
import HomeContact from "@/components/main/home-contact";
import HomeMain from "@/components/main/home-main";
import HomeParticles from "@/components/main/home-particles";
import HomeSkills from "@/components/main/home-skills";
import ScrollTrackerNav from "@/components/main/scroll-tracker-nav";
import { apiUrl } from "@/lib/utils";
import React from "react";

export default async function Home() {
  //const ApiUrl = process.env.PRODUCTION_URL;
  //const mainData = await fetchData(`${ApiUrl}/api/main`);

  console.log("Main API URL:", apiUrl);

  const main = await getMainData();
  const skill = await getSkillData();
  console.log("Main Data:", main);
  console.log("Skill Data:", skill);

  return (
    <div className="relative z-30 bg-darkOnly-bg h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <section id="00" className="py-10 lg:py-[150px]">
        <HomeMain data={main} />
      </section>
      <section id="01" className="py-10 lg:py-[150px]">
        <HomeAbout data={main} />
      </section>
      <section id="02" className="py-10 lg:py-[150px]">
        <HomeSkills data={skill} />
      </section>
      <section id="03" className="py-10 lg:py-[150px]">
        <HomeContact />
      </section>
      <ScrollTrackerNav />
      <Decoration />
      <HomeParticles />
    </div>
  );
}
