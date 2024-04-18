import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'
export const StyledButton = styled.button`
  border-radius: 200px;
padding: 16px 40px;
width: 173px;
height: 56px;
color: ${theme.colors.white};
background-color: ${theme.colors.red};
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;