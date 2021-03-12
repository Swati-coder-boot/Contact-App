import React from "react";
import ContactDetail from "./Axios HTTP/ContactDetail";
// import contactList from "./Axios HTTP/ContactList";

function App(){
    return(
        <React.Fragment>
             <nav className="navbar navbar-light bg-dark">
            <a href="/">React Axios Final Examples</a>
            </nav>
            <ContactDetail />
            {/* <contactList /> */}
        </React.Fragment>
    )
}
export default App;