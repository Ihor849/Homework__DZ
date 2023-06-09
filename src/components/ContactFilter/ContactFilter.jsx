// import propTypes from 'prop-types';
import { useDispatch, useSelector, } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';
import { getContactsList, getContactsFilter } from 'redux/selectors';
import { BoxFilter, Label, Input } from './ContactFilter.styled';

export const ContactFilter = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  console.log(filter);
  const dispatch=useDispatch();
 
  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>

      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e=>dispatch(filterContacts(e.target.value))}
      />
    </BoxFilter>
  );
};


