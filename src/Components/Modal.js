import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, input, setInput, handleSubmit }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Are you sure you want to continue?</h3>
        </div>
        <div className="text">
          <label htmlFor="name"></label>
        <input
          value=""
          autofocus="autofocus"
          type="text"
          id="name"
          placeholder="Enter Folder Name" 
          name="name"
          className="folder-input"
          value={input}
          autoFocus
          onChange={e=>setInput(e.target.value)}
          />
        <br />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleSubmit}>Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
