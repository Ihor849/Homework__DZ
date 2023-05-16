import propTypes from 'prop-types';
import {useReducer } from 'react';
// import { Formik } from 'formik';
// import { Form } from 'formik';
import { nanoid } from 'nanoid';
import {
  // FormBlock,
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

const initialState ={
name: '',
number: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':{
      return {
        ...state, name: action.payload,
  
      };
    }
      
    case 'number':{
      return {
        ...state, number: action.payload,
  
      };
    }
      
    default: return state
  }
};


export default function ContactForm({onSubmit}) {
 
  const[state, dispatch] = useReducer(reducer, initialState)
   
  const hendleChange = e => {
    const {name, value} = e.currentTarget;
    dispatch({
      type: name, 
      payload: value})
  };


  const hendleSubmit = e => {
    console.log(state);
    e.preventDefault();
  
    const contact = {id:nanoid(),...state }
   
    onSubmit(contact)
    dispatch({
    type: "reset"})
    
    
  };


  return (
    <Form onSubmit={hendleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            onChange={hendleChange}
            value={state.name}
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
          />
        </Label>
      </BoxName>
      <BoxNumber>
        <Label>
          Number:
          <Input
            type="tel"
            value={state.number}
            onChange={hendleChange}
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </Label>
      </BoxNumber>
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  );
}

// export default function ContactForm({ onSubmit }) {
//   const handleSubmit = ({ name, number }, { resetForm }) => {
//     const contact = { id: nanoid(), name, number };
//     onSubmit(contact);
//     resetForm();
//   };

//   return (
//     <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
//       <FormBlock autoComplete="off">
//         <BoxName>
//           <Label htmlFor="name">Name</Label>
//           <Input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             // required
//           />
//         </BoxName>
//         <BoxNumber>
//           <Label htmlFor="number">Number</Label>
//           <Input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             // required
//           />
//         </BoxNumber>

//         <Button type="submit">Add contact</Button>
//       </FormBlock>
//     </Formik>
//   );
// }

ContactForm.protoTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
