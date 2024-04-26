import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HeaderContainer = styled.div`
  width: 100%;
@media screen {min-width: 375px and (max-width: 833px);
    width: 375px;
     background-color: ${theme.colors.red} ;
  opacity: 0.8;
  padding: 20px;
  text-align: center;
  color: ${theme.colors.white};
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  }
   @media screen {min-width: 1440px;
    width: 1440px;
  background-color: ${theme.colors.red} ;
  opacity: 0.8;
  padding: 20px;
  text-align: center;
  color: ${theme.colors.white};
  font-size: 24px;
  display: flex;
  justify-content: space-between;
    }
    @media screen {min-width: 834px and (max-width: 1439px);
    width: 834px;
      /* font-size: 20px; */
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  gap: 16px;
`;

export const Cont = styled.div`
  display: flex;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const Navigation = styled.nav`
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

