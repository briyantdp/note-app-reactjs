import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Heading from "../components/Heading";
import CreateNote from "../components/CreateNote";

import { getAllNotes, addNote } from "../utils/local-data";

function AddPage() {
  const [notes, setNotes] = useState(getAllNotes());
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value.slice(0, 50));
  };

  const handleChangeBody = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    setNotes(addNote({ title, body }));

    navigate("/");
  };

  return (
    <>
      <Heading>Buat Catatan</Heading>
      <CreateNote
        title={title}
        body={body}
        handleChangeTitle={handleChangeTitle}
        handleChangeBody={handleChangeBody}
        onSubmitEventHandler={onSubmitEventHandler}
      />
    </>
  );
}

export default AddPage;
