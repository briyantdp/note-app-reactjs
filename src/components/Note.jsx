import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import { showFormattedDate } from "../utils/local-data";

function Note({ className, id, title, createdAt, body }) {
  return (
    <div className={className}>
      <Link to={`/notes/${id}`}>
        <h1 className="font-semibold hover:underline text-2xl truncate">
          {title}
        </h1>
      </Link>
      <span className="text-sm">{showFormattedDate(createdAt)}</span>
      <p className="text-md my-4 line-clamp-3 lg:line-clamp-4 xl:line-clamp-5 text-ellipsis">
        {parser(body)}
      </p>
    </div>
  );
}

Note.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Note;
