import { Link } from "react-router-dom";

function LogoHeader() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/vite.svg" alt="Notes Logo" />
      </Link>
    </div>
  );
}

export default LogoHeader;
