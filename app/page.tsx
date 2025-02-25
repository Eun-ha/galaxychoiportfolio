"use client";
import Decoration from "@/components/main/decoration";
import HomeAbout from "@/components/main/home-about";
import HomeContact from "@/components/main/home-contact";
import HomeMain from "@/components/main/home-main";
import HomeParticles from "@/components/main/home-particles";
import HomeSkills from "@/components/main/home-skills";
import ScrollTrackerNav from "@/components/main/scroll-tracker-nav";
import { fetchData } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loading from "./loading";
import React from "react";

export default function Home() {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchData(`/api/main`);
      setMainData(data);
    };

    fetchProjects();
  }, []);

  // 데이터가 아직 로딩 중일 경우 로딩 상태를 표시하거나 다른 컴포넌트를 렌더링할 수 있음
  if (!mainData) {
    return <Loading />;
  }

  return (
    <div className="relative z-30 bg-darkOnly-bg h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <section id="00" className="py-10 lg:py-[150px]">
        <HomeMain data={mainData} />
      </section>
      <section id="01" className="py-10 lg:py-[150px]">
        <HomeAbout data={mainData} />
      </section>
      <section id="02" className="py-10 lg:py-[150px]">
        <HomeSkills data={mainData} />
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
