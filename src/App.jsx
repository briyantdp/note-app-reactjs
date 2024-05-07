import React from "react";
import { getInitialData } from "./utils/index";

import "./styles/App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      notes: getInitialData(),
      searchNotes: [],
      dateNow: new Date().getFullYear(),
    };

    this.onQuerySearchChangeEventHandler =
      this.onQuerySearchChangeEventHandler.bind(this);
    this.onClickToSearchQueryHandler =
      this.onClickToSearchQueryHandler.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onActiveNote = this.onActiveNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onArchiveNote(id) {
    this.setState(() => {
      return this.state.notes.map((note) =>
        note.id === id ? (note.archived = true) : note
      );
    });
  }

  onActiveNote(id) {
    this.setState(() => {
      return this.state.notes.map((note) =>
        note.id === id ? (note.archived = false) : note
      );
    });
  }

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onQuerySearchChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        query: event.target.value,
      };
    });
  };

  onClickToSearchQueryHandler = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        searchNotes: this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(this.state.query.toLowerCase())
        ),
      };
    });
  };

  render() {
    return (
      <>
        <Header
          query={this.state.query}
          handleOnChange={this.onQuerySearchChangeEventHandler}
          handleClickToSearchQuery={this.onClickToSearchQueryHandler}
        />
        <Main
          notes={this.state.notes}
          searchNotes={this.state.searchNotes}
          addNote={this.onAddNote}
          archiveNote={this.onArchiveNote}
          activeNote={this.onActiveNote}
          deleteNote={this.onDeleteNote}
        />
        <Footer date={this.state.dateNow} />
      </>
    );
  }
}

export default App;
