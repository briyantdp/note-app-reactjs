/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import LogoHeader from "./LogoHeader";
import InputSearch from "./InputSearch";

function Header({ query, handleOnChange, handleClickToSearchQuery }) {
  return (
    <header className="header py-8 flex flex-col md:flex-row justify-around items-center">
      <LogoHeader />
      <InputSearch
        query={query}
        handleOnChange={handleOnChange}
        handleClickToSearchQuery={handleClickToSearchQuery}
      />
    </header>
  );
}

export default Header;
