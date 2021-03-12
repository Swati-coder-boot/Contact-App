import React from "react";
import ContactApp from "../Axios HTTP/ContactApp";


function App() {
    return(
        <React.Fragment>
            <nav className="navbar navbar-light bg-dark">
            <a href="/">React Axios Examples</a>
          </nav>
          <ContactApp />

        </React.Fragment>
    );

}
export default App;