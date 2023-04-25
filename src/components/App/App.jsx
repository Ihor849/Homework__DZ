import { Component } from "react";
import Container from 'components/Container/Container'
import Section from 'components/Section/Section'


class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: ''
  }
  render() {
    return (
      <Container>
        <Section title="Phonebook">

        </Section> 
        <Section title="Contacts">

        </Section> 
      </Container>
    )
    
  
  
    
  }
  
  
}

export default App;
