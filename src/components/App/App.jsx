import React, { Component } from 'react';
import {Container} from 'components/Container/Container'
import {Section} from 'components/Section/Section'
import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactsList } from 'components/ContactsList/ContactsList'
import {ContactFilter} from 'components/ContactFilter/ContactFilter'
// import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  addContact = ({ id, name, number }) => {
    
    const newContact = { id, name, number };
    this.setState(({ contacts }) => {
      if (this.state.contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        console.log("Уже есть");
        return;
      } else if (this.state.contacts.find((contact) => contact.number === newContact.number)) {
         console.log("НОМЕР есть");
        return;
      }
      return { contacts: [newContact, ...contacts] };
    });
    console.log(this.state.contacts);
    
  };


  onFilter = e => {
     console.log(e.target.value);
    this.setState({
      filter: e.target.value,
    });
  };
  
  onFilterContacts = () => {
    let contactsFilter = [];
    if (this.state.filter) {
      console.log(this.state.filter);
      
      contactsFilter = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      )
    } else {
      console.log(this.state.contacts);

      return this.state.contacts;
    }
    console.log(contactsFilter);
    return contactsFilter;
  };

  onDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
    console.log(this.state.contacts);
    
  }

  render() {
    const { contacts, filter } = this.state;
      return (
      <>
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact} contacts={contacts} />
          </Section>
          <Section title="Contacts ">
            <ContactFilter filter={filter} onFilter={ this.onFilter}  />
            <ContactsList contacts={this.onFilterContacts()} onDelete={this.onDelete} />
          </Section>
        </Container>
      </>
      
    )
  };
};
    

