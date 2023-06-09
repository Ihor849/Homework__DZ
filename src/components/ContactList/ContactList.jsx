
import {  useSelector } from 'react-redux';

import { getContactsList } from 'redux/selectors';
import { getContactsFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);

  const filterContacts = 
    [...contacts.filter(contact => contact.name.toLowerCase().includes(filter))];

  return (
    contacts.length !== 0 && (
      <List>
        {filterContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            id={id}
          />
        ))}
      </List>
    )
  );
};


