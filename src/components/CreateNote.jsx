import PropTypes from "prop-types";

function CreateNote({
  title,
  body,
  handleChangeTitle,
  handleChangeBody,
  onSubmitEventHandler,
}) {
  return (
    <section className="create-note my-4">
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
          className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 px-2 py-2 my-2 rounded-lg outline-none bg-transparent focus:outline-1 focus:outline-white text-white"
          placeholder="Judul catatan..."
          required
          value={title}
          onChange={handleChangeTitle}
        />
        <div
          id="descriptionNote"
          className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 h-48 px-2 py-2 my-2 rounded-lg outline-none bg-transparent focus:outline-1 focus:outline-white text-white"
          data-placeholder="Tuliskan catatanmu di sini..."
          contentEditable
          value={body}
          onInput={handleChangeBody}
        ></div>
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

CreateNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeBody: PropTypes.func.isRequired,
  onSubmitEventHandler: PropTypes.func.isRequired,
};

export default CreateNote;
