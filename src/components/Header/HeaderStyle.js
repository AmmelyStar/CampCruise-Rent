
import styled from '@emotion/styled';


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
`;

export const LogoText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
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
    color: #333333;
  }

  a:hover {
    color: #FF7E5F;
  }
`;