import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
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
    axios.get('https://pluga.co/ferramentas_search.json')
      .then((response) => {
        SetTools(response.data);
      })

      .catch(() => {
        console.log('Deu Erro');
      });
  }, []);

  return (
    <div>
      <Header />
      <SearchInput />
      <div>
        {Array.from(Array(pages), (item, index) => <button type="button" value={index} onClick={(e) => SetCurrentPage(Number(e.target.value))}>{index + 1}</button>)}
      </div>
      <div className="container-tools">
        {currentTools.map((tool) => (
          <a href={`https://pluga.co/ferramentas/${tool.app_id}/`} className="card-main" style={{ display: 'inline-block' }}>
            <div className="card-tools">
              <div className="card-image">
                <span className="tools-logo">
                  <img src={tool.icon} alt="Imagem das Ferramentas que a Pluga faz as instegrações" />
                </span>
              </div>
              <div className="infos-tools">
                {tool.name}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
