/* eslint-disable react/prop-types */
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";

function Main({
  activeNotes,
  archivedNotes,
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
        notes={activeNotes}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
      <NoteList
        name="Arsip"
        className="archived-note-list"
        notes={archivedNotes}
        activeNote={activeNote}
        deleteNote={deleteNote}
      />
    </main>
  );
}

export default Main;
