import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
   display: inline-block;
   text-decoration: none;
   padding: 0 12px;
   font-weight: 700;
   color: #2a363b;
   &:active {
      color: #e84a5f;
   }
`;
