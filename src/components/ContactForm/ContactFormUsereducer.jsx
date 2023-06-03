import { useDispatch,useSelector } from 'react-redux';
import { addContact} from 'redux/contactsSlice';
import { getContactsList } from 'redux/selectors';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import {
  // FormBlock,
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';


export default function ContactForm() {
  const contacts=useSelector(getContactsList)
 const dispatch=useDispatch()
  // const hendleChange = e => {
  //   const name = e.currentTarget.elements.value;
  //   const number = e.currentTarget.elements.value;
    
  // };
  

  const hendleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value
    const number = e.currentTarget.elements.number.value;
    const newContact = {id:nanoid(),name,number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      console.log('Уже есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.name} already in the phonebook`
      );
      return;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      console.log('НОМЕР есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.number} already in the phonebook`
      );
      return;
    }
    Notiflix.Notify.success(
      `${newContact.name} This subscriber is added to the phone book`
    );
   dispatch(addContact(newContact))
  };


  return (
    <Form onSubmit={hendleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            // onChange={hendleChange}
            // value={state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
      </BoxName>
      <BoxNumber>
        <Label>
          Number:
          <Input
            type="tel"
            // value={state.number}
            // onChange={hendleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
      </BoxNumber>
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  );
}



// ContactForm.protoTypes = {
//   onSubmit: propTypes.func.isRequired,
//   contacts: propTypes.arrayOf(propTypes.object).isRequired,
// };
