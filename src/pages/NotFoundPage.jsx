import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center text-white font-mono">
      <h1 className="text-8xl my-4 font-bold">404</h1>
      <p className="text-lg leading-8 my-4 font-normal">
        Oops... something went wrong.
      </p>
      <Link
        to="/"
        className="rounded-xl inline-block my-4 px-6 py-3 bg-orange-400 hover:bg-orange-600 text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
