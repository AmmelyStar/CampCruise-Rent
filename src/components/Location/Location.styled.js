import styled from '@emotion/styled';
import { theme } from "../../styled/Theme"


export const Title = styled.h3`
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: rgba(16, 24, 40, 0.6);


`;

export const Input = styled.h3`

border-radius: 10px;
padding: 18px 218px 18px 18px;
width: 360px;
height: 56px;
background: ${theme.colors.white};
&::placeholder {
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
 :hover,
  :focus,
  :active {
   border-radius: ${theme.colors.gray};
  }

`;