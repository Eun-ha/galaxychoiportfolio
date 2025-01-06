import { ResumeAside } from "@/components/resume-aside";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-[20px] mx-[8px] lg:flex lg:items-start lg:my-[50px] lg:mx-[50px]">
      <ResumeAside />
      {children}
    </div>
  );
}
