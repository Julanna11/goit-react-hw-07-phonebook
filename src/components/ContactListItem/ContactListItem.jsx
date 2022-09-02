import { Button } from 'utilities/button.styled';
import { ListItem } from 'components/ContactLsit/ContactList.styled';
import { useDeleteContactMutation } from 'redux/ContactsApi';
import { Bars } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function ContactListItem({ contactId, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const removeContact = () => deleteContact(contactId);
  return (
    <ListItem>
      {name}: {number}
      <Button type="button" onClick={removeContact} disabled={isDeleting}>
        {isDeleting ? (
          <Bars height="18" width="18" color="#4fa94d" />
        ) : (
          'Delete'
        )}
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
