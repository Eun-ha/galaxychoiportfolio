import Decoration from "@/components/main/decoration";
import HomeAbout from "@/components/main/home-about";
import HomeContact from "@/components/main/home-contact";
import HomeMain from "@/components/main/home-main";
import { HomeParticles } from "@/components/main/home-particles";
import HomeSkills from "@/components/main/home-skills";
import ScrollTrackerNav from "@/components/main/scroll-tracker-nav";

export default function Home() {
  return (
    <div className="relative z-30 bg-darkOnly-bg h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <div id="00" className="py-10 lg:py-[150px">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="01" className="py-10 lg:py-[150px">
        <HomeAbout />
      </div>
      <div id="02" className="py-10 lg:py-[150px]">
        <HomeSkills />
      </div>
      <div id="03" className="py-10 lg:py-[150px]">
        <HomeContact />
      </div>
      <ScrollTrackerNav />
      <Decoration />
    </div>
  );
}
