import React, { useEffect, useState } from 'react';
import ButtonCard from '../components/ButtonCard';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import getTools from '../services/request';
import '../style/Tools.css';

export default function Tools() {
  const [tools, SetTools] = useState([]);
  const [toolsPerPage] = useState(12);
  const [currentPage, SetCurrentPage] = useState(0);

  const pages = Math.ceil(tools.length / toolsPerPage);
  const startIndex = currentPage * toolsPerPage;
  const endIndex = startIndex + toolsPerPage;
  const currentTools = tools.slice(startIndex, endIndex);

  useEffect(() => {
    getTools()
      .then((response) => SetTools(response));
  }, []);
  return (
    <div>
      <Header />
      <SearchInput />
      <div className="TEST" />
      <div>
        {Array.from(Array(pages), (item, index) => <button type="button" value={index} onClick={(e) => SetCurrentPage(Number(e.target.value))}>{index + 1}</button>)}
      </div>
      <div className="container-tools">
        {currentTools.map((tool) => (
          <ButtonCard tool={tool} />
        ))}
      </div>
    </div>
  );
}
