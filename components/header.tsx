import { Logo } from "./logo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] mx-[8px] lg:mx-[50px]">
      <Logo />
      <Nav />
    </header>
  );
}
