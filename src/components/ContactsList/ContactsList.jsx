import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <ContactItem id={id} name={name} phone={phone} />
          </li>
        ))}
      </ul>
    </>
  );
};
