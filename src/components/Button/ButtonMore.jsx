import React from 'react';
import { StyledButton } from './ButtonMore.styled';

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
