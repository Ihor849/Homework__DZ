// import propTypes from 'prop-types';
import {useState} from 'react'
import Notiflix from 'notiflix';
import { Item, Button, Wrapper,Wrapname } from './ContactsItem.styled';
import { useDispatch} from 'react-redux';
import { deleteContact,updateContact } from 'redux/operations';



export const ContactItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number)

  const onEditContact=()=>{
   

    setIsEdit(prevState=>!prevState);
    if(isEdit){
      const contact = {
        id: id,
        name: editName,
        phone:editNumber,
      }
      
      dispatch(updateContact(contact));
    }
    
  };

  const handleChange =(e)=>{
    const {value,name }=e.currentTarget

    switch(name){
    case "editName":
      setEditName(value)
      break;
    case "editNumber": {
      setEditNumber(value)
      break;

    }
    default:  break;
  }
   
  }

  const onDelete = (id, name) => {
      Notiflix.Confirm.show(
        'Confirm',
        ` Do You want to delete a ${name}?`,
        'Yes',
        'No',
        () => {
          
          dispatch(deleteContact(id))
          
        },
        () => {},
        {
          titleColor: '#ce6214',
          titleFontSize: '20px',
          messageColor: '#1e1e1e',
          messageFontSize: '20px',
        }
      );
    };

  return (
    <Item key={id}>
      {isEdit
       ?
      <Wrapper>
        <Wrapname>
          <label htmlFor="editName">Name
            <input 
            type='text'
            name="editName" 
            onChange={handleChange}
             value={editName}/>
          </label>
        </Wrapname>
        <Wrapname>
          <label htmlFor="editNumber">Number
            <input 
            type='text'
             name="editNumber"
            onChange={handleChange}
             value={editNumber}/>
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

