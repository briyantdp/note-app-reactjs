import React from "react";
/* eslint-disable react/prop-types */

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxLengthTitle: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title:
          event.target.value.length <= this.state.maxLengthTitle
            ? event.target.value
            : this.state.title,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="create-note my-8">
        <h1 className="font-semibold font-mono text-4xl leading-normal text-white text-center">
          Buat Catatan
        </h1>
        <form
          id="addNote"
          className="flex flex-col justify-around items-center"
          onSubmit={this.onSubmitEventHandler}
        >
          <span className="text-white text-lg">
            Sisa karakter :{" "}
            {this.state.maxLengthTitle - this.state.title.length}
          </span>
          <input
            type="text"
            name="titleNote"
            id="titleNote"
            className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 px-2 py-2 my-2 rounded-lg outline-none"
            placeholder="Judul catatan..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            name="descriptionNote"
            id="descriptionNote"
            required
            className="w-full lg:w-9/12 xl:w-2/4 2xl:w-2/6 h-48 px-2 py-2 my-2 rounded-lg outline-none"
            placeholder="Tuliskan catatanmu di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
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
}

export default CreateNote;
