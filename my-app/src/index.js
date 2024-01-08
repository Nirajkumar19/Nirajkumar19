
//Importing the dependencies 
/*
var React = require("react"); 
var ReactDom=require("react-dom");
*/

// We can do the same thing by the help of import 
// that is
import React from "react";
import ReactDom from "react-dom";

//Render is the technique that can redirect a page with the help of function render();
// It will take two argument 
// 1. First one is what we want to show on the page
// 2. Second one is where we want to show that 1st arguments.

// Syntax--> ReactDom.render(What we want to show , where we want to show);

// In the first argument we can pass pure HTML code. But the question is how is it possible to write the html code in javascript file
// Answer:-> This HTML code is been converted to javascript code by babel compiler.
// So this will help to prevent us from write the code in following way:--
/*
var h1=document.createElement("h1");
h1.innerHTML="Hello World";
document.getElementById("root").appendChild(h1);
*/
// Istead of write above three line of code we can directly write <h1>Hello World</h1>

// This is called "JSX" and this is possible only because react allow to write JSX code. And we import the React module in the first line.

/*
ReactDom.render(<h1>Hello World</h1>,document.getElementById("root"));
*/

// But we can render only one html element from render() method
// So if we want to render more than one html then we have to wrap in a single html element and that is <div></div>
/*
ReactDom.render(
<div>
  <h1>Hello World</h1>
  <p>This is paragraph</p>
</div>,document.getElementById("root"));
*/

// We can also use javascript inside the html code like if we want to print the variable name of javascript inside the html code then we simply use {}
/* eg:-

const num=7;
const name="Niraj Kumar";
ReactDom.render(
  <div>
    <h1>My name is {name}</h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
*/

// We can also write any javascript expression inside that curly braces but we cant write the javascript statement inside it.
// Like We can write {3+4} or {Math.random()} but we cant {if(num>10) console.log(num) but we can write the ternary operator}

//------------------------- Styling in JSX ---------------------------
// 1. Write the css code in index.css file
// 2. Write the inline css code in index.js file

// But in second method we have to keep in mind that we are working with JSX, so it won't be the simple inline css code which we are using in html code
/*
ReactDom.render(
  <h1 style="color:red">Hello World</h1>,
  document.getElementById("root")
);
*/
// This way of inline css will not work because internally all will be change in javascript code. So we have to pass a javascript object in style {color: "red"}
/*
// So correct way is:
ReactDom.render(
  <h1 style={{color: "red"}}>Hello World</h1>,
  document.getElementById("root")
);

// Multiple css style
const customstyle={
  color: "red",
  backgroundColor: "blue",
  fontSize: "20px"
}

ReactDom.render(
  <h1 style={customstyle}>Hello World</h1>,
  document.getElementById("root")
);
*/



































































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
