import { FilterContainer, Label, Span } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { changeFilter, getFilter } from 'redux/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilterContact = event => dispatch(changeFilter(event.target.value));

  return (
    <FilterContainer>
      <Label>
        <Span>Find contacts by name</Span>
        <Input
          name="filter"
          type="text"
          value={filterValue}
          onChange={setFilterContact}
          placeholder="Name Surname"
        />
      </Label>
    </FilterContainer>
  );
};
