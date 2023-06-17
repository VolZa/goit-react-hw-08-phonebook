import { Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import {
  FormLabel,
  Form,
  Button,
  // Title,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems, selectIsLoading } from 'redux/services/selector';
import { addContact } from 'redux/contacts/operations';
import Notiflix from "notiflix";
import { Input, Text } from "@chakra-ui/react";



const ContactScheme = Yup.object().shape({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Required!'),
  number: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

// export const ContactForm = ({ onAdd }) => {
export const ContactForm = () => {
  const contacts = useSelector(selectContactsItems);
  // const isLoading = selectIsLoading; Такий запис людський але не працює, працює нелюдський - reactivskyj:
  const  isLoading  = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = ({name, number}, { resetForm}) => {
    // const contact = {
    //   name,
    //   phone: number,
    // }
    
    const isNameInContacts = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    
    if (isNameInContacts) return Notiflix.Notify.failure(`${name} is already in contacts!`);
    if (name && number) {
      dispatch(addContact({ name, number }));
    } else {
      console.log("Error: Name and Phone number are required");
    }
  
    resetForm();
  }

  return (
    <div>
      <Text fontSize='4xl'>Phonebook</Text>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactScheme}
        onSubmit={handleSubmit}
      >
        <Form >
          <FormLabel>
            Name
            <Field name="name" >
              {({ field }) => (
                <Input {...field} placeholder="name" size='md'
                htmlSize={4} width='auto' variant='outline' />
              )}
            </Field>
            <ErrorMessage name="name" component="span" />
          </FormLabel>
          <FormLabel>
            Number
            <Field name="number">
            {({ field }) => (
                <Input {...field} placeholder="phone number" size='md'
                htmlSize={4} width='auto' variant='outline' />
              )}
            </Field>
            <ErrorMessage name="number" component="span" />
          </FormLabel>
          <Button type="submit"
            disabled =  {isLoading} 
          >
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
