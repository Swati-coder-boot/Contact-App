import React from "react";
import { Fragment } from "react"
import Axios from "axios";
import ContactList from "./ContactList";


class ContactDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null,
            errorMessage: null,
            selectedcontact: null,
        };
    }

    componentDidMount() {
        let API_URL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";

        Axios.get(API_URL)
            .then((response) => {
                this.setState({
                    contacts: response.data,
                });
            })
            .catch((err) => {
                this.setState({
                    errorMessage: null,
                });

            });


    }
    render() {
        return (
           <Fragment>
               {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
               <h1>Hello</h1>
               {this.state.contacts ? (
                   <>
                   <ContactList contacts={this.state.contacts} />
                   </>
               ) : null}
               
           </Fragment>
        )
    }
}
export default ContactDetail;



// this ContactDetail is the parent Component 