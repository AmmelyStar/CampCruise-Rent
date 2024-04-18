import React from 'react';
import { StyledButton } from './ButtonStyled';

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>Show more</StyledButton>;
};

export default Button;
