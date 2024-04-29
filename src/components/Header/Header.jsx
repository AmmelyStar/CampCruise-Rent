import React, { useEffect, useState } from 'react';
import {
  HeaderContainer,
  Navigation,
  LogoText,
  LogoWrapper,
  MobMenu,
  BtnMobilMenu,
  Cont,
  Container,
} from './HeaderStyle';
import { NavLink } from 'react-router-dom';
import van from '../../img/svg/Van.svg';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import menu from '../../img/menu.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
       body.style.overflow = 'hidden';
    }
    else {
    body.style.overflow = '';
    }  return () => {
      body.style.overflow = '';
  };
}, [isOpen]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Container>
      <HeaderContainer isHidden={isOpen}>
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
        <BtnMobilMenu onClick={toggleMenu}>
          <img src={menu} alt="" />
        </BtnMobilMenu>
      </HeaderContainer>
      <MobMenu>{isOpen && <BurgerMenu onClose={toggleMenu} />}</MobMenu>
    </Container>
  );
}

export default Header;
