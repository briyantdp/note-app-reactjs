import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parser from "html-react-parser";

import ButtonAction from "../components/ButtonAction";

import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import {
  showFormattedDate,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/local-data";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id));
  const navigate = useNavigate();

  const archiveNoteHandler = () => {
    setNote(archiveNote(id));
    navigate("/archives");
  };

  const unarchiveNoteHandler = () => {
    setNote(unarchiveNote(id));
    navigate("/");
  };

  const deleteNoteHandler = () => {
    setNote(deleteNote(id));
    navigate("/");
  };

  useEffect(() => {
    if (note === undefined) {
      navigate("/not-found");
    }
  }, [note, navigate]);

  return (
    <div
      className="post-it-note text-black font-mono p-5 bg-yellow-400
    after:border-yellow-400 mx-auto my-8 w-4/5 md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/3 h-72"
    >
      <h1 className="font-semibold text-4xl truncate">
        {note ? note.title : ""}
      </h1>
      <span className="text-sm">
        {showFormattedDate(note ? note.createdAt : "")}
      </span>
      <p className="text-md my-4">{note ? parser(note.body) : ""}</p>
      <div className="button-action my-8 fixed bottom-10 right-10">
        {note ? (
          note.archived === false ? (
            <ButtonAction
              className="archive-button"
              onClick={archiveNoteHandler}
            >
              <ArchiveBoxArrowDownIcon className="size-12 mx-2 p-2 rounded-full inline-block bg-green-400 hover:bg-green-600 transition-all duration-75 text-white" />
            </ButtonAction>
          ) : (
            <ButtonAction
              className="active-button"
              onClick={unarchiveNoteHandler}
            >
              <PencilSquareIcon className="size-12 mx-2 p-2 rounded-full inline-block bg-green-400 hover:bg-green-600 transition-all duration-75 text-white" />
            </ButtonAction>
          )
        ) : (
          ""
        )}

        <ButtonAction className="delete-button" onClick={deleteNoteHandler}>
          <TrashIcon className="size-12 mx-2 p-2 rounded-full inline-block bg-red-400 hover:bg-red-600 transition-all duration-75 text-white" />
        </ButtonAction>
      </div>
    </div>
  );
}

export default DetailPage;
