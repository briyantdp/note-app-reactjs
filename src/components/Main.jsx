/* eslint-disable react/prop-types */
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";

export default function Main({
  notes,
  addNote,
  archiveNote,
  activeNote,
  deleteNote,
}) {
  return (
    <main className="main px-8">
      <CreateNote addNote={addNote} />
      <NoteList
        name="Catatan Aktif"
        className="active-note-list"
        notes={notes.filter((note) => note.archived === false)}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
      <NoteList
        name="Arsip"
        className="archived-note-list"
        notes={notes.filter((note) => note.archived === true)}
        activeNote={activeNote}
        deleteNote={deleteNote}
      />
    </main>
  );
}
