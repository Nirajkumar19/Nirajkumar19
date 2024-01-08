import './App.css';
import React from "react";

// ----------------------------- Keeper App --------------------------------------------------

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";
import notesArray from "./Components/Notes_array"


function App() {
  return (
    <div>
      <Header />
      <div className='outer'>
      {notesArray.map((n)=>{
        return (
          <Notes 
            title={n.title}
            content={n.content}
          />
        )
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Now we have to modify this keeper app with the help of props



// -------------------------------------- Contact List -------------------------------------------------------
// import Card from "./Components/Cards";
// import contact from './Components/Contacts';

// function createCard(con){
//   return (
//     <Card
//       key={con.id} // React expect the same name of key as key, We are giving this value because every component demand a unique key value because it create a virtul DOM 
//       name={con.name}
//       tel={con.tel}
//       email={con.mail} 
//       img={con.imgURL}
//     />
//   )
// }
// function App(){
//   return (
//     <div>
//       <h1 className="heading">My Contact</h1>
//       {/*
//       <Card 
//         name="Niraj Kumar"
//         tel="9262222084"
//         email="niraj84059@gmail.com"
//         img="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.222122907.1704095530&semt=sph"
//       />
//       <Card 
//         name="Ishita Kumari"
//         tel="9262222084"
//         email="ishu84059@gmail.com"
//         img="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.222122907.1704095530&semt=ais"
//       />
//       <Card 
//         name="Harsh Vardhan"
//         tel="9262222084"
//         email="harsh84059@gmail.com"
//         img="https://img.freepik.com/free-photo/portrait-brunette-woman-with-beautiful-long-brown-hair-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4432.jpg?size=626&ext=jpg&ga=GA1.1.222122907.1704095530&semt=sph"
//       />
//       */}
//       {/* Here we are seeing that we are passing the information with the same key but different value. So we can create an array of object in another file and we can use it here with the help of map function */}
//       {contact.map(createCard)} {/*--> Instead of above code we can simply use the map function on the contact array 
//        But in the console we get some error as "key should be unique for every card" so, for that we are giving unique key value for every card*/}
//     </div>
//   );
// }

// export default App;

// -------------------------------- Emojipedia -------------------------------------------
/*
import Card from "./Components/Cards";
import emoji from "./Components/Emoji_container"
function App(){
  return (
    <div>
        <div className='heading'><h1>Emojipedia</h1></div>
        <div className="outer">
          {emoji.map((em)=>{
              return (
                <Card 
                  emo={em.emoji}
                  name={em.name}
                  about={em.about}
                />
              )
          })}
        </div>
        
    </div>
  )
}

export default App;
*/