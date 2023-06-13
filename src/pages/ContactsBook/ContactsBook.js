import { ContactForm } from "components/ContactForm/ContactForm";
import { Title } from "components/Title/Title";
import { GlobalStyle } from "./Global.styled";
// import { ContactList } from 'components/Contact-list/ContactList';
import { ContactList } from '../../components/Contact-list/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { Layout } from 'components/Layout/Layout';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/contacts/operations";
// import { selectLoading } from "redux/contacts/selectors";

const ContactsBook = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      < ContactForm />
      <Title title="Contacts" />
      <Filter/>
      <ContactList/>      
    </>
  );  
};

export default ContactsBook;