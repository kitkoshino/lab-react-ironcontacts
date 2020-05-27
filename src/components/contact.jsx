import React, {Component} from 'react';
import './contact.css';

class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactArray: this.props.contacts
    };
  }
 
  render(){
    
    const contacts = [...this.state.contactArray];

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td ><img src={contact.pictureUrl} alt=""/></td>
                <td >{contact.name}</td>
                <td >{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
};

export default Contacts;
