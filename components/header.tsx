import { Logo } from "./logo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="relative px-[16px] z-40 flex justify-between items-center h-[80px]">
      <Logo />
      <Nav />
    </header>
  );
}
