/* eslint-disable react/prop-types */
import ButtonAction from "./ButtonAction";

import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { showFormattedDate } from "../utils";

function Note({
  className,
  id,
  title,
  createdAt,
  body,
  archived,
  archiveNote,
  activeNote,
  deleteNote,
}) {
  return (
    <div className={className}>
      <h1 className="font-semibold text-2xl truncate">{title}</h1>
      <span className="text-sm">{showFormattedDate(createdAt)}</span>
      <p className="text-md my-4">{body}</p>
      <div className="button-action flex justify-center gap-8">
        {archived === false ? (
          <ButtonAction
            className="archive-button"
            onClick={() => archiveNote(id)}
          >
            <ArchiveBoxArrowDownIcon className="size-8 text-green-400 hover:text-green-600" />
          </ButtonAction>
        ) : (
          <ButtonAction
            className="active-button"
            onClick={() => activeNote(id)}
          >
            <PencilSquareIcon className="size-8 text-green-400 hover:text-green-600" />
          </ButtonAction>
        )}

        <ButtonAction className="delete-button" onClick={() => deleteNote(id)}>
          <TrashIcon className="size-8 text-red-400 hover:text-red-600" />
        </ButtonAction>
      </div>
    </div>
  );
}

export default Note;
