import React from 'react';

// eslint-disable-next-line react/prop-types
export default function SearchInput({ SetinputSearchTools }) {
  const handleInputChange = (e) => {
    SetinputSearchTools(e.target.value);
  };
  return (
    <div>
      <form>
        <input
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
