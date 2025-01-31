import Decoration from "@/components/decoration";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeMain from "@/components/home-main";
import { HomeParticles } from "@/components/home-particles";
import HomeSkills from "@/components/home-skills";
import ScrollTrackerNav from "@/components/scroll-tracker-nav";

export default function Home() {
  return (
    <div className="relative z-30 bg-darkOnly-bg h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <div id="00" className="py-10 lg:py-[150px] bg-red-300">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="01" className="py-10 lg:py-[150px] bg-red-400">
        <HomeAbout />
      </div>
      <div id="02" className="py-10 lg:py-[150px] bg-red-500">
        <HomeSkills />
      </div>
      <div id="03" className="py-10 lg:py-[150px] bg-red-600">
        <HomeContact />
      </div>
      <ScrollTrackerNav />
      <Decoration />
    </div>
  );
}
