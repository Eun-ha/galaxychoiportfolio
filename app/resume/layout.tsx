import { ResumeAside } from "@/components/resume-aside";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-[20px] my-[20px] lg:flex lg:items-start lg:mx-[30px] lg:my-[50px]">
      <ResumeAside />
      {children}
    </div>
  );
}
