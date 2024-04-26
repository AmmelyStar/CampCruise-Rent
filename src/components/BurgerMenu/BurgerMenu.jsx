import {
  StyledMenu,
  ItemList,
  ItemMenu,
  Logo,
  LogoText,
  LogoWrap,
  Overlay,
} from './BurgerMenu.styled';
import van from '../../img/svg/Van.svg';
import close from '../../img/close.svg';
import { NavLink } from 'react-router-dom';

export default function BurgerMenu({ onClose }) {

  return (
    <>
      <Overlay onClick={onClose} />
      <StyledMenu>
        <Logo>
          <LogoWrap>
            <LogoText>CampCruise-Rent</LogoText>
            <img src={van} alt="van" width={40} />
          </LogoWrap>
          <img src={close} alt="" onClick={onClose} />
        </Logo>
        <ItemList>
          <ItemMenu>
            <NavLink to="/Home" onClick={onClose}>
              Home
            </NavLink>
          </ItemMenu>
          <ItemMenu>
            <NavLink to="/Catalog" onClick={onClose}>
              Catalog
            </NavLink>
          </ItemMenu>
          <ItemMenu>
            <NavLink to="/Favorites" onClick={onClose}>
              Favorites
            </NavLink>
          </ItemMenu>
        </ItemList>
      </StyledMenu>
    </>
  );
}
