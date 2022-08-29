import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './ContactForm.styled';
import { Button } from 'utilities/button.styled';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/ContactsApi';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const changeName = evt => setName(evt.target.value);
  const changeNumber = evt => setPhone(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    contacts.some(e => e.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : createContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Input
        id={nanoid()}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={changeName}
        required
      />
      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        onChange={changeNumber}
        required
      />
      <Button type="submit">Add Contact</Button>
    </form>
  );
};
