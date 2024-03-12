// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './../Experience/Experience.module.css'; // Import your CSS module

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Ensure you have a div with id 'modal-root' in your HTML
  );
};

export default Modal;
