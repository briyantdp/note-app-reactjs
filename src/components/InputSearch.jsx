import PropTypes from "prop-types";

function InputSearch({ query, handleOnChange, handleClickToSearchQuery }) {
  return (
    <div className="search-input my-12">
      <form className="text-center" onSubmit={handleClickToSearchQuery}>
        <input
          type="search"
          name="searchNote"
          id="searchNote"
          placeholder="Cari berdasarkan judul..."
          className="w-9/12 lg:w-1/2 2xl:w-2/5 px-4 py-2 rounded-l-lg outline-none"
          value={query}
          onChange={handleOnChange}
        />
        <button
          className="px-4 py-2 rounded-r-lg bg-orange-600 hover:bg-orange-800 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

InputSearch.propTypes = {
  query: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleClickToSearchQuery: PropTypes.func.isRequired,
};

export default InputSearch;
