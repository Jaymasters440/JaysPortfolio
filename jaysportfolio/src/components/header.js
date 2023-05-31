import React from "react";
import Navbar from "./navbar";
function header(currentPage, renderPage){
    return(
        <div class="page-header">
        <h1>Jay's Portfolio</h1>
      <Navbar currentPage={currentPage} renderPage={renderPage}/>
    </div>
    )
}
export default header;