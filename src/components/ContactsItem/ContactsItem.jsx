import propTypes from 'prop-types';
import {useState} from 'react'
import { Item, Button, Wrapper } from './ContactsItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEditContact=()=>{
    setIsEdit(prevState=>!prevState);
  };
  return (
    <Item key={id}>
      {isEdit
       ?
      <Wrapper>
        <label htmlFor="name">Name
          <input type='text'name="name"/>
        </label>
        <label htmlFor="number">Number
          <input type='text' name="number"/>
        </label>
      </Wrapper>
      : 
      <>
      <span>{name}</span>
      <span>{number}</span>
      </>
      }
     
      
      <Button type="button" onClick={() => onEditContact(id)}>
      Edit contact
      </Button>
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
