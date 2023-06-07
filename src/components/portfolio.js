import React, { useState } from "react";
import "../jass.css";
import Footer from "./footer";
import pfp from "../assets/Me.JPG";
import noteImage from "../assets/projects/Note.png";
import calendarImage from "../assets/projects/calendar.gif";
import bookemonImage from "../assets/projects/Bookemon-demo.gif";
import weatherImage from "../assets/projects/Weather.png";
import resume from "../assets/Resume.docx";


const Portfolio = () => {

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const [page, setPage] = useState('About');

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);

    const validateEmail = () => {
        setEmailErr(!validEmail.test(email));
    }


    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);

    const validateName = () => {
        setNameErr(name.trim() === "");
    }

    const [message, setMessage] = useState("");
    const [messageErr, setMessageErr] = useState(false);

    const validateMessage = () => {
        setMessageErr(message.trim() === "");
    }

    //var pageHtml = "";
    function changePage() {
        if (page === "About") {
            return (
                <div>
                    <h1>About me</h1>
                    <img src={pfp} alt="Me" height="300px" ></img>
                    <p>Military and law enforcement experience lends itself to a high degree of integrety and duty, and the ability to work with a highly diverse group of people from all backgrounds and abilities. Many of those years were spent in school environments with a teaching/mentoring mindset. This, teamed with a love of life and learning helps create a space for learning and understanding. Embracing a new page in life with coding and full stack web developement with the completion of a University of Washington coding bootcamp to help me along the journey.  Love music, cars, art, cycling and skiing. </p>
                </div>

            )
        }
        else if (page === "Resume") {
            return (
                <div>
                    <h1>Work Experience</h1>

                    <p>Click <a href={resume} download>here</a>to download resume</p>
                </div>

            )
        }
        else if (page === "Contact") {
            return (
                <form>
                    <h1>Contact information</h1>
                    <input type="email"
                        className="form-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}></input>
                    {emailErr && <p className="error">Your email is invalid</p>}

                    <input type="text"
                        className="form-input"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}></input>
                    {nameErr && <p className="error">Please enter your name</p>}

                    <textarea type="text"
                        className="form-input"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={validateMessage}></textarea>
                    {messageErr && <p className="error">Your message is invalid</p>}
                    {(!emailErr && !nameErr && !messageErr && message !== "" && email !== "" && name !== "") && <button className="btn" >Submit</button>}

                </form>
            )
        }
        else if (page === "Portfolio") {
            return (
                <div className="container text-center">
                    <h1>Portfolio</h1>
                    <div className="flex-row justify-center">
                        <div className="flex-column">
                            <div className="card">


                            

                                <div className="card-header">
                                    <h2>CodeMonkeyCalendar</h2>
                                </div>
                                <div className="card-body">
                                    <img src={calendarImage} width="400px" alt="deployed calendar app"></img>
                                </div>
                                <div className="card-footer">
                                    <a href="https://https://jaymasters440.github.io/CodeMonkeyCalendar/-pajg-prgj.onrender.com/"><small>link to app</small></a>
                                    <a href="https://github.com/Jaymasters440/CodeMonkeyCalendar"><small>link to code</small></a>
                                </div>

                            </div>

                        </div>
                        <div className="flex-column">
                            <div className="card">


                                <div className="card-header">
                                    <h2>NoNoteMe</h2>
                                </div>
                                <div className="card-body">
                                    <img src={noteImage} width="400px" alt="deployed Note app"></img>
                                </div>
                                <div className="card-footer">
                                    <a href="https://asdjg-pajg-prgj.onrender.com/"><small>link to app</small></a>
                                    <a href="https://github.com/Jaymasters440/NoNoteME"><small>link to code</small></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-row justify-center">
                        <div className="flex-column">
                            <div className="card">


                            

                                <div className="card-header">
                                    <h2>CodeMonkeyCalendar</h2>
                                </div>
                                <div className="card-body">
                                    <img src={bookemonImage} width="400px" alt="Bookemon app"></img>
                                </div>
                                <div className="card-footer">
                                    <a href="https://btay786.github.io/1-project-to-rule/"><small>link to app</small></a>
                                    <a href="https://github.com/btay786/1-project-to-rule"><small>link to code</small></a>
                                </div>

                            </div>

                        </div>
                        <div className="flex-column">
                            <div className="card">


                                <div className="card-header">
                                    <h2>WeatherWeappon</h2>
                                </div>
                                <div className="card-body">
                                    <img src={weatherImage} width="400px" alt="Weather app"></img>
                                </div>
                                <div className="card-footer">
                                    <a href="https://jaymasters440.github.io/WeatherWeappon/"><small>link to app</small></a>
                                    <a href="https://github.com/Jaymasters440/WeatherWeappon"><small>link to code</small></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        
    }
    const handlePageChange = (newPage) => { setPage(newPage) }



    return (

        <div>
            <div className="project">
            <div className="page-header">
                <h1>Jay's Portfolio</h1>

                <div className="navbar">
                    <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
                    <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                    <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact Me</a>
                    <a href="#resume" onClick={() => handlePageChange("Resume")}>Resume</a>

                </div>

            </div>
           
            <div className="project text-center">
                {changePage()}
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Portfolio;