import { ToggleButton } from "@/components/toggle-button";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-4 lg:px-[100px] lg:py-[80px]">
      {children}
      <ToggleButton />
    </div>
  );
}
