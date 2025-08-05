import { AsideButtons } from "@/components/aside-buttons";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-4 lg:py-[80px] lg: max-w-[1280px] mx-auto">
      <div className="lg:flex lg:items-start">
        <AsideButtons path="/resume" />
        {children}
      </div>
    </div>
  );
}
