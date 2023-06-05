import React from "react";

function navbar(props){
    return(
        
           
         <div className="navbar">
         <a href="#about" onClick={props.setPage('about')}>About Me</a>
         <a href="#portfolio" onClick={props.setPage("portfolio")}>Portfolio</a>
         <a href="#contact" onClick={props.setPage("contact")}>Contact Me</a>
         <a href="#resume" onClick={props.setPage("resume")}>Resume</a> 
        
    </div>
    )
}
export default navbar;