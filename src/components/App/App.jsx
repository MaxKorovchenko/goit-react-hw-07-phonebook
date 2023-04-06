import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, MainTitle, Title } from './App.styled';
import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactsForm />

      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>{error}</b>}
      <ContactsList />

      <GlobalStyle />
    </Layout>
  );
};
