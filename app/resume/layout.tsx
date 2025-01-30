import { ResumeAside } from "@/components/resume-aside";
import { ToggleButton } from "@/components/toggle-button";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-4 lg:flex lg:items-start lg:px-[120px] lg:py-[80px]">
      <ResumeAside />
      {children}
      <ToggleButton />
    </div>
  );
}
