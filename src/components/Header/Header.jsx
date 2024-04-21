import React from 'react';
import {
  HeaderContainer,
  Navigation,
  LogoText,
  LogoWrapper, 
Cont
} from './HeaderStyle';
import { NavLink } from 'react-router-dom';
import van from '../../img/svg/Van.svg';





const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Cont>
          <img src={van} alt="van" />
        </Cont>
        <NavLink to="/Home">
          <LogoText>CampCruise-Rent</LogoText>
        </NavLink>
      </LogoWrapper>
      <Navigation>
        <ul>
          <li>
            <NavLink to="/Home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Catalog" activeClassName="active">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/Favorites" activeClassName="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
