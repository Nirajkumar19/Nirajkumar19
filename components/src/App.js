import React from "react";
import Heading from "./header";
import Body from "./body";
import Component1 from "./Components/component1"

function App() {
  return (
    <div>
      <Heading />
      <Body />
      <Body /> {/* We can as many times we want */}
    </div>
  );
}

function App(){
    return (
        <Component1/>
    )
}

export default App;
