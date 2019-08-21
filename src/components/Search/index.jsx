import React, { memo } from "react";
import "./style.scss";
const Search = memo(() => {
  return (
    <form className="form-search">
      <input className="input-base form-search__input" />
    </form>
  );
});
export default Search;
