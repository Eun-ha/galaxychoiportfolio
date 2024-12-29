import { ResumeAside } from "@/components/resume-aside";
import { fetchData } from "@/lib/utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchData("http://localhost:3000/api/resume");
  return (
    <div className="lg:flex">
      <ResumeAside data={data} />
      {children}
    </div>
  );
}
