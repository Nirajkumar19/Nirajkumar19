import './App.css';

/*
import Greet from './Components/Greetings'
import Registration from './Components/Registration'

var isregister=false;


function App() {
  return (
    <div className="container"> 
      <Greet/>
      <Registration register_status={isregister}/>
    </div>
  );
}

export default App;
*/

// **************************************************** UseState React Hook ***********************************************
// It will simply change the state 
// We are using useState(initial value) --> It will return array with two element, first one is initial value and second one is a function that will help to change the current state and re-render the module.

// Let take an example to increment or decrement the counter value
import React, {useState} from 'react'; //-> We have to import from react dependencies

/*
var count=0;
function increment(){
  count++;
}
function App(){
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

// This set of code will not increment the count variable because re-rendering is not happen, so for that we are using useState 
*/

/*
function App(){
  const [count,setcount]=useState(0); //Destructruing the array which is returned by the useState 
  function increment(){
    setcount(count+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
*/

// ********************************** Forms in React *********************************
// Basically in HTML form the value will updated by itself but in React the value will updated with the help of useState so we need to do all the changes with the help of useState.
// Also we need to know that if we submitted something in the form then it will get refresh every time. So we need prevent with the help of preventdefault.
/*
function App(){
  const [name,setname]=useState("");
  const [headingtext,setheadingtext]=useState("");
  function handleChange(event){
    setname(event.target.value);
  }
  function handleClick(event){
    setheadingtext(name);
    event.preventDefault(); //Prevent from the refreshing the page of form
  }
  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <form onSubmit={handleClick} >
        <input type="text" onChange={handleChange} value={name}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;
*/

function App(){
  // We are using object in the hook because we have to change the state of both firstname and lastname both
  const [name,setname]=useState({
    fname: "",
    lname: "",
    email: ""
  })

  // function handlechange(event){
  //   const name=event.target.name;
  //   const value=event.target.value;
  //   if(name==='fname'){
  //     setname({fname:value,lname:name.lname}); // By doing that we are setting lname as undefined because every time we are calling setname with newvalue which is undefined. So we have to keep track of previous value. Hence we are passing a callback function which will give the previous value of name as argument.
  //   }else if(name==='lname'){
  //     setname({lname:value,fname:name.fname});
  //   }
  // }

  function handlechange(event){
    const name=event.target.name;
    const value=event.target.value;
    setname((prevvalue)=>{
      if(name==='fname'){
        return {fname:value,lname:prevvalue.lname,email:prevvalue.email}
      }else if(name==='lname'){
        return {lname:value,fname:prevvalue.fname,email:prevvalue.email}
      }else if(name==='email'){
        return {email:value,fname:prevvalue.fname,lname:prevvalue.lname}
      }
    });
  }
  return (
    <div className='container'>
      <h1>Hello {name.fname} {name.lname}</h1>
      <p>{name.email}</p>
      <form action="">
        <input type="text" name='fname' onChange={handlechange} value={name.fname}/>
        <input type="text" name='lname' onChange={handlechange} value={name.lname}/>
        <input type="email" name='email' onChange={handlechange} value={name.email}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;


