import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/ContactSlice';
import { useGetContactsQuery } from 'redux/ContactsApi';

export default function ContactList() {
  const { data = [] } = useGetContactsQuery();
  const filterValue = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalValue = filterValue.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ id, name, phone }) => {
        return (
          <ContactListItem
            key={id}
            contactId={id}
            name={name}
            number={phone}
          ></ContactListItem>
        );
      })}
    </List>
  );
}
