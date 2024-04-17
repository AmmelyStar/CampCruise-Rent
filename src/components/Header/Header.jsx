import React from 'react';
import {
  HeaderContainer,
  Navigation,
  LogoText,
    LogoWrapper,  
} from './HeaderStyle';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <NavLink to="/Home">
          <LogoText>Car-Rental</LogoText>
        </NavLink>
      </LogoWrapper>
      <Navigation>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/Favorites">Favorites</NavLink>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
