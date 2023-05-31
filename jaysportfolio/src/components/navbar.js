import React from "react";

function navbar(currentPage,changePage){
    return(
        <div class="navbar">
        <a href="#about" onClick={changePage('about')}>About Me</a>
        <a href="#portfolio" onClick={changePage("portfolio")}>Portfolio</a>
        <a href="#contact" onClick={changePage("contact")}>Contact Me</a>
        <a href="#resume" onClick={changePage("resume")}>Resume</a>
        
    </div>
    )
}
export default navbar;