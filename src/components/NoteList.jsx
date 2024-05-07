/* eslint-disable react/prop-types */
import Heading from "./Heading";
import Note from "./Note";

export default function NoteList({
  name,
  className,
  notes,
  archiveNote,
  activeNote,
  deleteNote,
}) {
  const notelistClassName = "my-20 w-full lg:w-9/12 2xl:w-3/5 md:mx-auto".split(
    " "
  );
  notelistClassName.push(className);
  return (
    <section className={notelistClassName.join(" ")}>
      <Heading>{name}</Heading>
      <div className="note-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12 ">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Note
              className="post-it-note text-black font-mono p-5 bg-yellow-400
              after:border-yellow-400"
              key={note.id}
              {...note}
              archiveNote={archiveNote}
              activeNote={activeNote}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <p className="text-xl text-white text-center">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}
