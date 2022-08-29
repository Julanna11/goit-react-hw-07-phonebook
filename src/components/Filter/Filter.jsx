import { FilterContainer, Label, Span } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { changeFilter } from 'redux/ContactSlice';
import { useDispatch } from 'react-redux';
export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterContact = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <FilterContainer>
      <Label>
        <Span>Find contacts by name</Span>
        <Input
          name="filter"
          type="text"
          onChange={setFilterContact}
          required={false}
        />
      </Label>
    </FilterContainer>
  );
};
