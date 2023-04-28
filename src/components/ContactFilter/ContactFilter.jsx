import {BoxFilter,Label,Input} from './ContactFilter.styled'

export const ContactFilter = ({ filter, onFilter }) => {
  console.log(filter);
  
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
