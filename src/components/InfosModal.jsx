import { Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

export default function InfosModal({ tool }) {
  return (
    <div>
      <span className="tool-logo">
        <img src={tool.icon} alt="Imagem das Ferramentas que a Pluga faz as instegrações" style={{ background: tool.color }} />
      </span>
      <h3>{tool.name}</h3>
      <a href={tool.link} target="_blank" rel="noreferrer">Acessar</a>
      <Button>Oi</Button>
    </div>
  );
}

InfosModal.propTypes = {
  tool: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,

};
