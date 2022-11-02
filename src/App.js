import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";
import Block from "./components/block/block";

function App() {
  return (
    <div className="App">
      <Block type="Starter" style="white" />
      <Block type="Pro" style="blue" />
      <Block type="Teams" style="white" />
    </div>
  );
}

export default App;
