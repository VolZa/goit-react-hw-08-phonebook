import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm, LogLabel } from './LoginForm.styled';
import { Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
   const dispatch = useDispatch();

   const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
         logIn({
         email: form.elements.email.value,
         password: form.elements.password.value,
         })
      );
      form.reset();
   };

   return (
      <LogForm onSubmit={handleSubmit} autoComplete="off">
         <LogLabel>
         Email
         <Input type="email" name="email" />
         </LogLabel>
         <LogLabel >
         Password
         <Input type="password" name="password" />
         </LogLabel>
         <Button type="submit">Log In</Button>
      </LogForm>
   );
};
