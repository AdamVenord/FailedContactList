import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from 'semantic-ui-react';
import Contacts from './Contacts';
import ContactForm from "./ContactForm"

class App extends Component {
  state = {
    contacts: [
      { id:1, firstName: "Jerry", phone: "801-121-5656", },
      { id:2, firstName: "Gregory", phone: "801-420-6969" },
      { id:3, firstName: "Comso and Wandy", phone: "600-300-4000" },
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", phone: "", });
  } 

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, };
    this.setState({ contacts: [contact, ...this.state.contacts], });
  };

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact
    });
    this.setState({ contacts: [...contacts], });
  };
  

  render() {
    return (
      <Container sytle={{ paddingTop: "25px" }}>
        <Header as="h1">React contact list</Header>
        <br />
        <ContactForm add={this.addContact} />
        <br />
        <Contacts contacts={this.state.contacts} remove={this.removeContact} />
      </Container>
    
    );
  }
}

export default App;