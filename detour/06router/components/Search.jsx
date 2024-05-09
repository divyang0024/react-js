import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [search, setSearch] = useSearchParams();

  return (
    <div>
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(search.get("q"));
          }}
        >
          <label htmlFor="searchfield">Enter text : </label>
          <input
            type="text"
            id="searchfield"
            onChange={(e) => {
              setSearch({ q: e.target.value });
            }}
          />
          <br />
          <button type="submit">Search</button>
          <button
            type="reset"
            onClick={() => {
              setSearch({});
            }}
          >
            Reset
          </button>
        </form>
      </>
    </div>
  );
}

export default Search;
