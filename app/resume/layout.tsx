import { ResumeAside } from "@/components/resume/resume-aside";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-4 lg:px-[120px] lg:py-[80px]">
      <div className="lg:flex lg:items-start ">
        <ResumeAside />
        {children}
      </div>
    </div>
  );
}
