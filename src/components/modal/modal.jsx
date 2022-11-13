import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const reload = () => window.location.reload();

const Modal = ({ close, children, send, btn = true }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="darkBG" onClick={() => close(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Contact Us</h5>
          </div>
          <button className="closeBtn" onClick={() => close(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="div1">{children}</div>
          <div className="modalActions">
            <div className="actionsContainer">
              {btn ? (
                <button className="sendBtn" onClick={() => send()}>
                  Send
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
