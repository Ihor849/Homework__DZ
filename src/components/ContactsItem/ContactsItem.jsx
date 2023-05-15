import propTypes from 'prop-types';
import {useState} from 'react'
import { Item, Button, Wrapper,Wrapname } from './ContactsItem.styled';

export const ContactItem = ({ id, name, number, onDelete, updateContact}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number)

  const onEditContact=()=>{
    setIsEdit(prevState=>!prevState);
    if(isEdit){
      const contact = {
        id: id,
        name: editName,
        number:editNumber,
      }
      updateContact(contact);
    }
  };
  const handleCange =(e)=>{
    const {name,value}=e.currentTarget
    switch(name){
    case"editName":
    setEditName(value);
    break;
    editName(value);
    case "editNumber":
      case"editNumber":
      setEditNumber(value)

    

  }
  }

  return (
    <Item key={id}>
      {isEdit
       ?
      <Wrapper>
        <Wrapname>
          <label htmlFor="editName">Name
            <input type='text'name="editName" onChange={handleCange} value={editName}/>
          </label>
        </Wrapname>
        <Wrapname>
          <label htmlFor="editNumber">Number
            <input type='text' name="editNumber" onChange={handleCange} value={editNumber}/>
          </label>
        </Wrapname>
      </Wrapper>
      : 
      <>
      <span>{name}</span>
      <span>{number}</span>
      </>
      }
     
      
      <Button type="button" onClick={onEditContact}>
        {isEdit? "Save contact" :"Edit contact"}
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
