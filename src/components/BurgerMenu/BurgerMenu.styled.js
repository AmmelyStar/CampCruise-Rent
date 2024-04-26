import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';


export const StyledMenu = styled.div`
  background-color: ${theme.colors.white};
  width: 375px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 0;

`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden

`;


export const ItemList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
padding: 30px;
margin: 0 auto;
color: ${theme.colors.red};

`;

export const ItemMenu = styled.li`
font-size: 26px;
  font-weight: 500;
  line-height: 100%;
a {
  color: ${theme.colors.red};
  text-decoration: none;
  }
   a:hover,
   a:focus,
   a:active {
    color: ${theme.colors.black}; 
  }

`;
export const Logo = styled.div`
display: flex;
width: 375px;
background: ${theme.colors.red};
padding: 10px;
padding-left: 14px;
text-align: center;
justify-content: space-between;
margin: 0 auto;
position: fixed;
top: 0;

`;


export const LogoText = styled.div`
font-size: 26px;
  font-weight: 600;
  line-height: 100%;
color: white;
padding-top: 4px;



`;
export const LogoWrap = styled.div`
display: flex;
gap: 12px;
flex-direction: row-reverse;

`;
