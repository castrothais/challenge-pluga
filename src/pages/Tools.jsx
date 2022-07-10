import React, { useEffect, useState } from 'react';
import ButtonCard from '../components/ButtonCard';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import getTools from '../services/request';
import '../style/Tools.css';

export default function Tools() {
  const [tools, SetTools] = useState([]);
  const [inputSearchTools, SetinputSearchTools] = useState('');
  const [filterTools, SetfilterTools] = useState([]);
  const [toolsPerPage] = useState(12);
  const [currentPage, SetCurrentPage] = useState(0);

  const pages = Math.ceil(tools.length / toolsPerPage);
  const startIndex = currentPage * toolsPerPage;
  const endIndex = startIndex + toolsPerPage;
  const currentTools = filterTools.slice(startIndex, endIndex);

  useEffect(() => {
    if (inputSearchTools === '' && tools.length === 0) {
      getTools()
        .then((response) => {
          SetTools(response);
          SetfilterTools(response);
        });
    }

    if (inputSearchTools === '' && tools.length > 0) {
      SetfilterTools(tools);
    }
    if (inputSearchTools !== '') {
      SetfilterTools(tools.filter((tool) => tool.name.toUpperCase()
        .includes(inputSearchTools.toUpperCase())));
    }
    console.log(inputSearchTools);
  }, [inputSearchTools]);

  return (
    <div>
      <Header />
      <SearchInput SetinputSearchTools={SetinputSearchTools} />
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
