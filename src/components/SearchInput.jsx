import React from 'react';
import '../style/SearchInput.css';

// eslint-disable-next-line react/prop-types
export default function SearchInput({ SetinputSearchTools }) {
  const handleInputChange = (e) => {
    SetinputSearchTools(e.target.value);
  };
  return (
    <div>
      <form className="form-input-search-tool">
        <input
          className="input-search-tool"
          type="text"
          name="tools-filter"
          id="tools-filter"
          placeholder="Buscar Ferramenta"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
