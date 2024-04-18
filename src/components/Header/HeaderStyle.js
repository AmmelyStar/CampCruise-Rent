
import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {

  }

`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
`;

export const LogoText = styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.red};
  text-decoration: none;
`;

export const Navigation = styled.nav`
/* li::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 2px;
} */
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
    color: ${theme.colors.black};
  }

  a:hover {
    color: ${theme.colors.red};
  }
  
`;

// export const LogoImage = styled.img`
//   width: 100px; 
//   height: auto; 

// `;