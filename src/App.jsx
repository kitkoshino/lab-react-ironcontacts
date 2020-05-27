import React, {Component} from 'react';
import contacts from './contacts.json';
import Contacts from './components/contact';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsList:[...contacts].slice(0,5)
    }
  
  }

  addRandomContact = () => {
    const newContacts = this.state.contactsList;
    const random = contacts.sort(() => 0.5 - Math.random())[0];
    newContacts.push(random);
    this.setState({
      contactsList: newContacts
    });
  };

  render () {


    return (
      <div className="App">
        <button onClick={this.addRandomContact}> Add random contact</button>
        <Contacts contacts={this.state.contactsList}/>
      </div>
    );
  }
}

export default App;
