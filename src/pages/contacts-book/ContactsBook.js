import { ContactForm } from "components/ContactForm/ContactForm";
import { Title } from "components/Title/Title";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/Contact-list/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout/Layout';

export const ContactsBook = () => {
  return (
    <Layout>
      <GlobalStyle />
      < ContactForm />
      <Title title="Contacts" />
      <Filter/>
      <ContactList/>      
    </Layout>
  );  
};