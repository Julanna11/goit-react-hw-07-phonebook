import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/ContactSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/ContactsApi';

export default function ContactList() {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();

  const removeContact = contactId => deleteContact(contactId);

  const getFilteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
            deleteContact={removeContact}
          ></ContactListItem>
        );
      })}
    </List>
  );
}
