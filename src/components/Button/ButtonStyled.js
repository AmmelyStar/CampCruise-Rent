import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'
export const StyledButton = styled.button`
  border-radius: 200px;
padding: 16px 60px;
width: 173px;
height: 56px;
background-color: ${theme.colors.red};
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;