import React, { Component } from 'react'

class ContactList extends Component {
    render(){
        return(
            <>
                <pre>{JSON.stringify(this.props.contacts)}</pre>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-9">
                           <table className="table table-hover  table-primary table-striped">
                               <thead className="bg-primary text-white">
                                   <tr>
                                       <td>ID</td>
                                       <td>Image</td>
                                       <td>Name</td>
                                       <td>Age</td>
                                       <td>Location</td>
                                       <td>Email</td>
                                    </tr>
                               </thead>
                               <tbody>
                                   { this.props.contacts != null ? 
                                   <>
                                       {
                                           this.props.contacts.map((contacts)=>{
                                               return(<>
                                               <tr>
                                                   <td>{contacts.login.uuid}</td>
                                                   <td><img src={contacts.picture.medium}/></td>
                                                   <td>{contacts.name.first}</td>
                                                   <td>{contacts.dob.age}</td>
                                                   <td>{contacts.location.city}</td>
                                                   <td>{contacts.email}</td>
                                               </tr>
                                               </>)
                                           })
                                       }
                                       </> : null
                                   }
                               </tbody>
                           </table>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ContactList;



// this is the child Component
