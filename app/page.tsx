import Decoration from "@/components/decoration";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeMain from "@/components/home-main";
import { HomeParticles } from "@/components/home-particles";
import HomeSkills from "@/components/home-skills";
import ScrollTrackerNav from "@/components/scroll-tracker-nav";

export default function Home() {
  return (
    <div className="Home bg-darkOnly-bg relative z-30 h-full px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <div id="00" className="py-10 lg:py-[150px]">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="01" className="py-10 lg:py-[150px]">
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
