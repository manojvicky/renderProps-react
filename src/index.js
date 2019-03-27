import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./mouse/Mouse";
import Cat from "./cat/Cat";

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Cursor position</h2>
        <Mouse
          render={mouse => {
            return <Cat position={mouse} />;
          }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
