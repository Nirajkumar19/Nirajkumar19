import React from "react";
// Since we are returning the html code in javascript function so we always import the react dependencies. Because this feature(JSX) is provided by react dependencies

function header(){
    return <h1>Navigation Bar</h1>;
}

export default header; //If we add parenthesis header() then it will return immediately