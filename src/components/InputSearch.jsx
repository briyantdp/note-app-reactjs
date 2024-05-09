/* eslint-disable react/prop-types */
function InputSearch({ query, handleOnChange, handleClickToSearchQuery }) {
  return (
    <div className="search-input my-6">
      <form onSubmit={handleClickToSearchQuery}>
        <input
          type="search"
          name="searchNote"
          id="searchNote"
          placeholder="Search note..."
          className="w-56 md:w-64 lg:w-72 xl:w-96 px-2 py-2 rounded-l-lg outline-none"
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

export default InputSearch;
