import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegForm, RegLabel } from './RegisterForm.styled';
import { Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegLabel>
        Username
        <Input type="text" name="name" />
      </RegLabel>
      <RegLabel>
        Email
        <Input type="email" name="email" />
      </RegLabel>
      <RegLabel>
        Password
        <Input type="password" name="password" />
      </RegLabel>
      <Button type="submit">Register</Button>
    </RegForm>
  );
};
