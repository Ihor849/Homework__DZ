import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import {List} from './ContactsList.styled'



export const ContactsList = ({ contacts, onDelete }) => {
	
	console.log(contacts);
	return (
		contacts.length !==0 &&
		<List>
			{contacts.map(({ id, name, number }) => (
				<ContactItem
					key={id}
					name={name}
					number={number}
					id={id}
				onDelete={onDelete}/>
			))}
		</List>
		
	)
		
} 

ContactsList.propTypes = {
	contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDelete: propTypes.func.isRequired,
};