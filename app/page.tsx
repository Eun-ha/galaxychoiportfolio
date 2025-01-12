import Decoration from "@/components/decoration";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";
import HomeMain from "@/components/home-main";
import { HomeParticles } from "@/components/home-particles";
import HomeSkills from "@/components/home-skills";

export default function Home() {
  return (
    <div className="relative z-0 mx-[80px]">
      <div id="01" className="px-[80px] py-[120px]">
        <HomeMain />
        <HomeParticles />
      </div>
      <div id="21" className="h-[1000px] bg-red-700">
        <HomeAbout />
      </div>
      <div id="03" className="h-[1000px] bg-red-800">
        <HomeSkills />
      </div>
      <div id="04" className="h-[1000px] bg-red-900">
        <HomeContact />
      </div>
      <div className="fixed bottom-4 left-1/2 -ml-[70px] bg-red-600">
        <a href="#01">main</a>
        <a href="#02" className="pl-1">
          about
        </a>
        <a href="#03" className="pl-1">
          skills
        </a>
        <a href="#04" className="pl-1">
          contact
        </a>
      </div>
      <Decoration />
    </div>
  );
}
