import { Button } from 'utilities/button.styled';
import { ListItem } from 'components/ContactLsit/ContactList.styled';

export function ContactListItem({ contactId, name, phone, deleteContact }) {
  return (
    <ListItem>
      {name}: {phone}
      <Button type="button" onClick={() => deleteContact(contactId)}>
        Delete
      </Button>
    </ListItem>
  );
}
