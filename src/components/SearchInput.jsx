import React from 'react';

export default function SearchInput() {
  return (
    <div>
      <form>
        <label htmlFor="tools-filter">
          Ferramentas
          <input
            type="text"
            name="tools-filter"
            id="tools-filter"
          />
        </label>
      </form>
    </div>
  );
}
