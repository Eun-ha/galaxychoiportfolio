"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";

const HIDDEN_HEADER_PATHS = ["/login"];

export default function HeaderController() {
  const pathname = usePathname();
  const hideHeader = HIDDEN_HEADER_PATHS.includes(pathname);

  if (hideHeader) return null;

  return <Header />;
}
