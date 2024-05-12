import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Heading from "../components/Heading";
import InputSearch from "../components/InputSearch";
import NoteList from "../components/NoteList";
import ButtonAdd from "../components/ButtonAdd";

import { getActiveNotes } from "../utils/local-data";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("keyword") || "");
  const [notes, setNotes] = useState(getActiveNotes());
  const [searchNotes, setSearchNotes] = useState([]);

  function handleOnChange(event) {
    const inputSearchValue = event.target.value;
    setQuery(inputSearchValue);
    setSearchParams({ keyword: inputSearchValue });
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
      <Heading>Catatan Aktif</Heading>
      <InputSearch
        query={query}
        handleOnChange={handleOnChange}
        handleClickToSearchQuery={handleClickToSearchQuery}
      />
      <NoteList className="active-note-list" notes={searchNotes} />
      <ButtonAdd />
    </>
  );
}

export default HomePage;