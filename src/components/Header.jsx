import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header py-8 flex justify-around items-center">
      <LogoHeader />
      <Navigation />
    </header>
  );
}

export default Header;
