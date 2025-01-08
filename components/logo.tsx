import SpaceIcon from "@/icons/spaceIcon";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <SpaceIcon />
      <h1 className="text-3xl pl-2 hidden lg:block">Galaxy</h1>
    </Link>
  );
}
