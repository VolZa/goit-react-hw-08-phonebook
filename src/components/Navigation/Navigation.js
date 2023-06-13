
import { useAuth } from 'hooks';
import { NavLinkStyled } from './Nfvigation.styled';

// import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     // Отримати дані контактів з бекенду
  //     fetchContacts();
  //   }
  // }, [isLoggedIn]);

  // const fetchContacts = async () => {
  //   try {
  //     const response = await fetch('/contacts'); // Замініть цей URL на потрібний
  //     const data = await response.json();
  //     setContacts(data);
  //   } catch (error) {
  //     console.log('Помилка отримання контактів', error);
  //   }
  // };

  return (
    <nav>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Phonebook
        </NavLinkStyled>
      )}
    </nav>
  );
};