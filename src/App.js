import React from "react";
import Button from "./components/Button";
import Ripple from "./components/Ripple";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button>
        Ripple Effect
        <Ripple color={"#1fecf9"} duration={2000} />
      </Button>
    </div>
  );
}

export default App;
