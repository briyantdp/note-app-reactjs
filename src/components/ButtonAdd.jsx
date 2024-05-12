import { PlusIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

function ButtonAdd() {
  return (
    <Link to="/notes/new">
      <PlusIcon className="size-12 p-2 rounded-full inline-block bg-green-400 hover:bg-green-600 transition-all duration-75 text-white fixed bottom-10 right-10" />
    </Link>
  );
}

export default ButtonAdd;
