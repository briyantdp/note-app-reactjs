/* eslint-disable react/prop-types */

import { useState } from "react";

function CreateNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value.length <= 50 ? event.target.value : title);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <section className="create-note my-8">
      <h1 className="font-semibold font-mono text-4xl leading-normal text-white text-center">
        Buat Catatan
      </h1>
      <form
        id="addNote"
        className="flex flex-col justify-around items-center"
        onSubmit={onSubmitEventHandler}
      >
        <span className="text-white text-lg">
          Sisa karakter : {50 - title.length}
        </span>
        <input
          type="text"
          name="titleNote"
          id="titleNote"
          className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 px-2 py-2 my-2 rounded-lg outline-none"
          placeholder="Judul catatan..."
          required
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          name="descriptionNote"
          id="descriptionNote"
          required
          className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 h-48 px-2 py-2 my-2 rounded-lg outline-none"
          placeholder="Tuliskan catatanmu di sini..."
          value={body}
          onChange={handleChangeBody}
        ></textarea>
        <button
          type="submit"
          className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 px-2 py-2 my-2 rounded-lg bg-orange-600 hover:bg-orange-800 text-white"
        >
          Buat
        </button>
      </form>
    </section>
  );
}

export default CreateNote;
