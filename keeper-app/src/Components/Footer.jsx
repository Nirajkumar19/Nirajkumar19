import React from "react";

const year=new Date().getFullYear();

function footer(){
    return (
        <div className="footer">
            <p>copyright <span>{year}</span></p>
        </div>
    )
}

export default footer;