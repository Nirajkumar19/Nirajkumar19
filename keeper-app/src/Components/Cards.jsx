import React from "react";

// ----------------------------- Card of My Contacts website -----------------------------------
// import Details from "./Details"

// function card(props){
//     return (
//         <div className="cards">
            
//             <h3>{props.name}</h3>
//             <div className="image"><img src={props.img} alt="" /></div>
//             <div className="details">
//                 {/* Here we simply see that we are using the same paragraph tag. So for reuse the paragraph tag we can simply create another component for that.
//                 <p>{props.tel}</p>
//                 <p>{props.email}</p> Instead of that we render <Details/> */}
//                 <Details 
//                     info={props.tel}
//                 />
//                 <Details 
//                     info={props.email}
//                 />
//             </div>
//         </div>
//     );
// }

// export default card;

// --------------------------- Card of Emojipedia -----------------------------

function card(props){
    return (
    
        <div className="card">
            <div className="emoji">
                <p>{props.emo}</p>
            </div>
            <div className="about-emoji">
                <h3>{props.name}</h3>
            </div>
            <div className="content">
                <p>{props.about}</p>
            </div>
        </div>
    )
}

export default card;