import SpaceIcon from "@/icons/spaceIcon";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center"
      aria-label="Link to Home"
    >
      <span className="text-text-emphasis">
        <SpaceIcon />
      </span>
      <h1 className="font-medium pl-2 hidden lg:block">Galaxy</h1>
    </Link>
  );
}
