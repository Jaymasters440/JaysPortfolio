import React from "react";
import gitHubLogo from "../assets/logo192.png";
import linkedinLogo from "../assets/1384014.png";

function Footer(){
    return(
        <div class="footer">
        <a href="https://github.com/Jaymasters440">
            <img src={gitHubLogo} height="90px" alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/jay-masters-95362968/">
            <img src={linkedinLogo} height="90px" alt="linkedin"></img>
        </a>
    </div>
    )
}

export default Footer;