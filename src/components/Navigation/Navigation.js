
import { useAuth } from 'hooks';
import { NavLinkStyled } from './Nfvigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/tasks">
          Tasks
        </NavLinkStyled>
      )}
    </nav>
  );
};