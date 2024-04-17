
import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${theme.colors.red};
 width: 335px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 704px;
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
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
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