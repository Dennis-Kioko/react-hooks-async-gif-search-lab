import React, { useState } from "react";

function GifSearch({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue("");
          handleSearch(inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Enter a Search Term"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Find Gifs</button>
      </form>
    </div>
  );
}

export default GifSearch;
