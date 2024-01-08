
// -----------------------------------------------------------------------------------------------------------------

/*
import React from "react";
import ReactDom from "react-dom";


// ReactDom.render(
//   <div>
//     <h1>Navigation Bar</h1> {/*Let us assume this is one component that is navigation bar*///}
//     <ul> {/* This is another or second componet*/}
//       <li>Search</li>
//       <li>Courses</li>
//       <li>Help Section</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// Now we have to define these two components in another file and use it here with the help of import and export properties of ES6.
// We have to define a function and return these components.
/*
eg:-
function header(){
  return <h1>Navigation Bar</h1>;
}
*/

// import Heading from "./header" //Here we dont need to give the file extension name it is optional, beacuse this is the beauty of react or JSX
// import Body from "./body"
// ReactDom.render(
//   <div>
//     <Heading /> {/* It is compulsory to write the name in Pascal format it means first letter should be capital  */}
//     <Body />
//   </div>,
//   document.getElementById("root")
// );

// -----------------------------------------------------------------------------------------------------------


// But we commanly see that in the index.js file, <App /> is rendered here, this is only for managing all the things in proper way.
// We are also doing the same things :)

// import ReactDom from "react-dom";
// import App from "./App";
// ReactDom.render(
//   <App />,
//   document.getElementById("root")
// );


import React from "react";
import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(
//   <App />,
//   document.getElementById("root")
// );

// ----------------------------------- import more than one Module --------------------------------
import pi from "./Components/component1"; {/* When we import the default exported module then the name can be in any, But when we import than one module then the name should be same as exported module like doublePi is imported here and doublePi exported from component1.jsx file*/}
import { doublePi, triplePi } from "./Components/component1";

ReactDom.render(
  <div>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </div>,
  document.getElementById("root")
);
