import propTypes from 'prop-types';
import { BoxFilter, Label, Input } from './ContactFilter.styled'

export const ContactFilter = ({ filter, onFilter }) => {
  
  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>
      
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      
    </BoxFilter>
  );
};

ContactFilter.propEypes = {
  filter: propTypes.string,
  onFilter: propTypes.func,
}