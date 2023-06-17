
import { selectError, selectIsLoading, selectShowingContacts } from 'redux/services/selector';
import { Contacts, Contact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/RortationLinesLoaler';
import { Box, Button} from '@chakra-ui/react';

export const ContactList = () => {
   const contacts = useSelector(selectShowingContacts);
   const isLoading = useSelector(selectIsLoading);
   const isError = useSelector(selectError);
   const dispatch = useDispatch();


   useEffect(() => {
      dispatch(fetchContacts())
   }, [dispatch]);

   return (
      <Box maxW="512px" gap="12px">
         <Contacts>
            { isLoading && <h2><Loader/></h2>}

            {isError && <h2>error</h2>}  
            {contacts.map(contact => {
               return(
                  <Contact key={contact.id}>
                     <Box >
                        <span>{contact.name}: </span>
                        <span>{contact.number}</span>
                     </Box>
                     <Button type="button" onClick={
                        ()=>dispatch(delContact(contact.id))} >Delete</Button>
                  </Contact>
               );
            })} 

         </Contacts>
      </Box>
   );
};
