import React from "react";
import Axios from "axios";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null,
            errorMessage:null,
        };
    }
    componentDidMount(){
        let DataURL= "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(DataURL)
        .then((response)=>{
            console.log(response);
            this.setState({
                contacts:response.data,
            });
        })
        .catch((err)=>{
            this.setState({
                errorMessage:err,
            });
        });
    }
    render() {
        const { contacts }= this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2">Contact List-Data from Github API</p>
                            <p>The JavaScript switch statement is
                            used to execute one code from multiple expressions.
                            is just like else if statement that we have learned in
                            previous page. But it is convenient than if..
                             else..if because it can be used with numbers, characters</p>
                            <div className="row">
                                <div className="col">
                                </div>
                            </div>
                            <pre>{JSON.stringify(this.state.contacts)}</pre>
                            <table className="table table-hover text-center table-success table-striped"></table>
                            <thead className="bg-info text-white"></thead>
                            <tr>
                                <td>Id</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Email</td>
                                <td>Location</td>
                            </tr>
                            <tbody>
                                {contacts != null ? (
                                    <React.Fragment>
                                        {contacts.map((contact) => {
                                            return (
                                                <tr>
                                                    <td>{contact.login.uuid}</td>
                                                    <td><img src={contact.picture.medium} /></td>
                                                    
                                                    <td>{contact.name.first}   </td>
                                                    <td>{contact.dob.age} </td>
                                                    <td> {contact.gender} </td>
                                                    <td>{contact.email} </td>
                                                    <td>{contact.location.city}  </td> 
                                                </tr>
                                            );
                                        })}
                                    </React.Fragment>
                                ) : null}
                            </tbody>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
export default ContactApp;