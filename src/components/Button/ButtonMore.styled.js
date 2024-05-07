import styled from '@emotion/styled';
import { theme } from '../../styled/Theme'


export const StyledButton = styled.button`
  border-radius: 200px;
padding: 16px 22px;
width: 145px;
height: 56px;
border: 1px solid rgba(71, 84, 103, 0.2);
background-color: transparent;
text-align: center;
  cursor: pointer;
  @media screen and (min-width: 834px){
padding: 10px 22px;
width: 126px;
height: 36px;  
  }
  &:hover {
    border: 1px solid ${theme.colors.red};
  }
`;