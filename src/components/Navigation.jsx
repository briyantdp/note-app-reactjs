import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="my-8">
      <ul className="text-white text-2xl font-mono font-normal hover:font-bold hover:transition-all hover:duration-100">
        <li className="my-4">
          <Link to="/archives">Arsip</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
