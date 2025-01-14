import Decoration from "@/components/decoration";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeMain from "@/components/home-main";
import { HomeParticles } from "@/components/home-particles";
import HomeSkills from "@/components/home-skills";

export default function Home() {
  return (
    <div className="relative z-0 mx-[80px]">
      <div id="01" className="min-h-screen px-[80px] py-[150px]">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="02" className="min-h-screen px-[80px] py-[150px]">
        <HomeAbout />
      </div>
      <div id="03" className="min-h-screen px-[80px] py-[150px]">
        <HomeSkills />
      </div>
      <div id="04" className="min-h-screen ">
        <HomeContact />
      </div>
      <div className="fixed bottom-4 left-1/2 -ml-[70px] bg-red-600">
        <a href="#01">Main</a>
        <a href="#02" className="pl-1">
          About
        </a>
        <a href="#03" className="pl-1">
          Skills
        </a>
        <a href="#04" className="pl-1">
          Contact
        </a>
      </div>
      <Decoration />
    </div>
  );
}
