import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";
import Block from "./components/block/block";
import Modal from "./components/modal/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Block type="Starter" style="white" onclick={onclick} />
      <Block type="Pro" style="blue" onclick={onclick} />
      <Block type="Teams" style="white" onclick={onclick} />

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <div>
            Please introduce your email and we will get back to you soon.
          </div>
          <br></br>
          <input type="email" id="emails" name="emails" multiple></input>
        </Modal>

      )}

    </div>
  );
}

export default App;
