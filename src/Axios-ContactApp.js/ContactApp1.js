import React from "react";
import  Axios  from "axios";

class ContactApp extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: null,
        };
    }
    getData = () => {
        let API_URL =
            "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(API_URL)
            .then((response) => {
                this.setState({
                    contacts: response.data,
                })

            }).catch();

    };
    render() {
        return (
            <div>
                <h1>Consuming HTTP Rest API</h1>
                <button className="btn btn-primary" onClick={this.getData}>
                    {/* {" "} */}
                    Get Data
                </button>
                <pre>{JSON.stringify(this.state.contacts)}</pre>
            </div>
        )
    }
}
export default ContactApp;


// here how to get the API data from backend??? we are getting data URLfrom backend using Axios......


