import React from 'react';
import { StyledButton } from './ButtonStyled';

const Button = ({ onClick}) => {
  return <StyledButton onClick={onClick}>Show more</StyledButton>;
};

export default Button;
