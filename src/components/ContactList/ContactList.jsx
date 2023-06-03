// import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import { getContactsFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);
  console.log(filter);

  const filterContacts = 
    [...contacts.filter(contact => contact.name.toLowerCase().includes(filter))]
    
  ;
    console.log(filterContacts);
  return (
    filterContacts.length !== 0 && (
      <List>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        ))}
      </List>
    )
  );
};

// ContactsList.propTypes = {
//   contacts: propTypes.arrayOf(propTypes.object).isRequired,
//   onDelete: propTypes.func.isRequired,
// };
