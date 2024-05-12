import PropTypes from "prop-types";

import Note from "./Note";

function NoteList({ className, notes }) {
  const notelistClassName = "my-20 w-full lg:w-9/12 2xl:w-3/5 md:mx-auto".split(
    " "
  );
  notelistClassName.push(className);
  return (
    <section className={notelistClassName.join(" ")}>
      <div className="note-list grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-12 ">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Note
              className="post-it-note text-black font-mono p-5 bg-yellow-400
              after:border-yellow-400"
              key={note.id}
              {...note}
            />
          ))
        ) : (
          <p className="text-xl text-white text-center">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}

NoteList.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
