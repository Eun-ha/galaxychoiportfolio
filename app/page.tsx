import ScrollTriggered from "@/components/scroll-triggered";

export default function Home() {
  return (
    <div className="relative">
      <div id="01" className="bg-red-300">
        <ScrollTriggered />
      </div>
      <div id="02" className="h-[1000px] bg-red-600"></div>
      <div id="03" className="h-[1000px] bg-red-100"></div>
      <div className="fixed top-24 right-0 bg-red-600">
        <a href="#01">1섹션</a>
        <a href="#02">2섹션</a>
        <a href="#03">3섹션</a>
      </div>
    </div>
  );
}
