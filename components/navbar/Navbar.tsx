import { Suspense } from "react";

import Container from "@/components/global/Container";
import CartButton from "@/components/navbar/CartButton";
import DarkMode from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";

function Navbar() {
  return (
    <div className="border-b">
      <Container className="flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
