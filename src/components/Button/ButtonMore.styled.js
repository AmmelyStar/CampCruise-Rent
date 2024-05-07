import styled from '@emotion/styled';
import { theme } from '../../styled/Theme'


export const StyledButton = styled.button`
  border-radius: 200px;
padding: 16px 22px;
width: 155px;
height: 56px;
border: 1px solid rgba(71, 84, 103, 0.2);
background-color: transparent;
text-align: center;
  cursor: pointer;
  @media screen and (min-width: 834px){
padding: 10px 22px;
width: 136px;
height: 40px;  
  }
    @media screen and (min-width: 1440px){
padding: 10px 22px;
width: 146px;
height: 46px;  
  }
  &:hover {
    border: 1px solid ${theme.colors.red};
  }
`;