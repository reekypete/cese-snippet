import React from 'react';

const Modal = ({ match, history }) => {
  const { code } = match.params;
  if (!code) {
    return null;
  }
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
          display: "block",
        }}
      >
        <h1>Modal with code: {code}</h1>

        <p>Form goes here</p>

        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
