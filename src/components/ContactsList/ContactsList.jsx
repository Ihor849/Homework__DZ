import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import {List} from './ContactsList.styled'



export const ContactsList = ({ contacts ,onDelete}) => {
	console.log(contacts);
	return (
		
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
  contacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};