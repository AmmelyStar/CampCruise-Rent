import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'
export const StyledButton = styled.button`
  border-radius: 200px;
padding: 16px 40px;
width: 173px;
height: 56px;
color: ${theme.colors.white};
background-color: ${theme.colors.red};
  @media screen and (min-width: 834px) and (max-width: 1439px){
padding: 10px 20px;
width: 113px;
height: 26px;
padding-bottom: 26px;

    
  }
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;