import { Logo } from "./logo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="flex justify-between items-center px-2 h-[80px]">
      <Logo />
      <Nav />
    </header>
  );
}
