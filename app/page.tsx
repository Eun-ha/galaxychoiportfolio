import Decoration from "@/components/decoration";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeMain from "@/components/home-main";
import { HomeParticles } from "@/components/home-particles";
import HomeSkills from "@/components/home-skills";
import ScrollTrackerNav from "@/components/scroll-tracker-nav";
import { UseOverTop } from "@/hooks/use-over-top";

export default function Home() {
  return (
    <div className="relative z-0 mx-4 lg:mx-[80px]">
      <div id="00" className="lg:min-h-screen py-10 lg:px-[80px] lg:py-[150px]">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="01" className="lg:min-h-screen py-10 lg:px-[80px] lg:py-[150px]">
        <HomeAbout />
      </div>
      <div id="02" className="lg:min-h-screen py-10 lg:px-[80px] lg:py-[150px]">
        <HomeSkills />
      </div>
      <div id="03" className="lg:min-h-screen py-10 lg:px-[80px] lg:py-[150px]">
        <HomeContact />
      </div>
      <ScrollTrackerNav />

      <Decoration />
    </div>
  );
}
