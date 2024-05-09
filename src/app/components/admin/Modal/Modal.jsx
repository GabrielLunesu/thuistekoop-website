import './Modal.css';

const Modal = ({ children, onClose }) => {
  
    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  