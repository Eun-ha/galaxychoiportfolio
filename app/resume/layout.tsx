import { ResumeAside } from "@/components/resume-aside";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex">
      <ResumeAside />
      {children}
    </div>
  );
}
