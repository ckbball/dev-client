// DEPRECATED FOR NOW

import React from "react";

import "./search.styles.scss";

const SearchInput = ({ handleChange, searchValue, ...otherProps }) => (
  <div className="group">
    <div className="form-group">
      <select name="status" value={searchValue} onChange={e => handleChange(e)}>
        <option value="0">* Select a Search Value</option>
        <option value="Beginner">Beginner</option>
        <option value="Middle">Middle</option>
        <option value="Senior">Senior</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Devops">Devops</option>
        <option value="Design">Design</option>
      </select>
      <small className="form-text">Select a search value.</small>
    </div>
  </div>
);

export default SearchInput;
