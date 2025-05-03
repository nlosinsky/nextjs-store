import Container from '@/components/global/Container';
import CartButton from '@/components/navbar/CartButton';
import DarkMode from '@/components/navbar/DarkMode';
import LinksDropdown from '@/components/navbar/LinksDropdown';
import Logo from '@/components/navbar/Logo';
import NavSearch from '@/components/navbar/NavSearch';

function Navbar() {
  return (
    <div className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap py-8">
        <Logo />
        <NavSearch />

        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>

      </Container>
    </div>
  );
}

export default Navbar;
