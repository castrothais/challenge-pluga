import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import InfosModal from './InfosModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '15%',
  },
};
Modal.setAppElement('#root');

export default function ButtonCard({ tool }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div style={{ display: 'inline-block' }}>
      <button className="card-main" onClick={openModal} type="button">
        <div className="card-tools">
          <div className="card-image">
            <span className="tools-logo">
              <img src={tool.icon} alt="Imagem das Ferramentas que a Pluga faz as instegrações" style={{ background: tool.color }} />
            </span>
          </div>
          <div className="infos-tools">
            {tool.name}
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <InfosModal tool={tool} />
        <button onClick={closeModal} type="button">close</button>
      </Modal>
    </div>
  );
}

ButtonCard.propTypes = {
  tool: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

};
