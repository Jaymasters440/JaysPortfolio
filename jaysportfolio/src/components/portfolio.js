import React, { useState } from "react";
import "../jass.css";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import pfp from "../assets/Me.JPG";



function Portfolio() {
    const [page, setPage] = useState('resume');

    //var pageHtml = "";
    function renderPage() {
        if (page === "about") {
            return (
                <div>
                    <h1>About me</h1>
                    <img src={pfp} alt="Me" height="300px"></img>
                    <p>say stuff about me</p>
                </div>

            )
        }
        else if (page === "resume") {
            return (
                <div>
                    <h1>Work Experience</h1>
                    <h3>My most recent job</h3>
                    <small>this date-this date, this location</small>
                    <p>what I did at the job</p>
                </div>

            )
        }
        // do contact next(which will include forms from jass), then portfolio(which will include cards from jass)
    }
    const handlePageChange=(newPage)=> { setPage(newPage) }



    return (

        <body>
{/* when we run this, it recognizes the function, but we get an error that there are too many rerenders. not sure why it is rerendering */}
{/* 
<div class="navbar">
        <a href="#about" onClick={handlePageChange('about')}>About Me</a>
        <a href="#portfolio" onClick={handlePageChange("portfolio")}>Portfolio</a>
        <a href="#contact" onClick={handlePageChange("contact")}>Contact Me</a>
        <a href="#resume" onClick={handlePageChange("resume")}>Resume</a>
        
    </div> */}


            {/*when this is active, the program does not recognize the passed function as a function  */}
      {/* <Navbar currentPage={page} changePage={handlePageChange()}/> */}
            {/* <Header currentPage={page} renderPage={handlePageChange} /> */}
            <div class="project">
                {renderPage()}
            </div>


            <Footer />
        </body>
    )
}

export default Portfolio;