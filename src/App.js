import { useState } from "react";
import "./App.css";
import Block from "./components/block/block";
import Modal from "./components/modal/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onclick = () => {
    setIsOpen(!isOpen);
  };

  const inclick = (isFalse) => {
    setModalOpen(true);
  };

  return (
    <div className="App">
      <Block type="Starter" style={white} onclick={onclick} />
      <Block type="Pro" style={blue} onclick={onclick} />
      <Block type="Teams" style={white} onclick={onclick} />

      {isOpen && (
        <Modal close={setIsOpen} send={inclick} btn={modalOpen ? false : true}>
          <div>
            {modalOpen ? (
              <div> We have received your request correctly!</div>
            ) : (
              <div>
                <div>
                  Please introduce your email and we will get back to you!
                </div>
                <br></br>
                <input type="email" id="emails" name="emails"></input>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
