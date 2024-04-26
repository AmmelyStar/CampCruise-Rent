import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isHidden ? 'transparent' : theme.colors.red)};
  opacity: ${props => (props.isHidden ? '0' : '0.8')};
  padding: 20px;
  text-align: center;
  color: ${theme.colors.white};
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  visibility: ${props => (props.isHidden ? 'hidden' : 'visible')}; // змінено тут

  /* @media screen and (min-width: 375px) and (max-width: 833px) {
    width: 375px;
  }

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  } */
`;


export const LogoWrapper = styled.div`
  @media screen and (min-width: 375px) and (max-width: 833px) {
      gap: 10px;
  }
  margin-right: 20px;
  display: flex;
  gap: 16px;

`;

export const Cont = styled.div`
  display: flex;

`;
export const Container = styled.div`
display: flex;

  /* @media screen and (min-width: 375px) and (max-width: 833px) {
    width: 375px;
  }

  @media screen and (min-width: 834px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  } */

`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  @media screen and (min-width: 375px) and (max-width: 833px) {
      font-size: 22px;
      margin-top: 8px;
  }
`;

export const Navigation = styled.nav`
  @media screen and (min-width: 375px) and (max-width: 833px) {
    display: none;
  }

  @media screen and (min-width: 834px) {
    display: flex;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.white};
  }

  a:hover {
    color: black;
  }

  .active {
    color: black;
  }
`;

export const MobMenu = styled.div`
  @media screen and (min-width: 833px) {
    display: none;
  }
`;

export const BtnMobilMenu = styled.div`
background-image: url(../../img/menu.png);
margin-left: 26px;
 @media screen and (min-width: 833px)  {
    display: none;
  }
`;