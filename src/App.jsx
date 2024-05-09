import { useEffect, useState } from "react";

import { getInitialData } from "./utils/index";

import "./styles/App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState(getInitialData());
  const [searchNotes, setSearchNotes] = useState([]);

  const dateNow = new Date().getFullYear();

  const activeNotes = (searchNotes || notes).filter(
    (note) => note.archived === false
  );
  const archivedNotes = (searchNotes || notes).filter(
    (note) => note.archived === true
  );

  function handleOnChange(event) {
    setQuery(event.target.value);
  }

  function onAddNote({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function onArchiveNote(id) {
    const archiveNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(archiveNotes);
  }

  function onActiveNote(id) {
    const activeNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(activeNotes);
  }

  function onDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleClickToSearchQuery(event) {
    event.preventDefault();
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
      <Header
        query={query}
        handleOnChange={handleOnChange}
        handleClickToSearchQuery={handleClickToSearchQuery}
      />
      <Main
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        searchNotes={searchNotes}
        addNote={onAddNote}
        archiveNote={onArchiveNote}
        activeNote={onActiveNote}
        deleteNote={onDeleteNote}
      />
      <Footer date={dateNow} />
    </>
  );
}
