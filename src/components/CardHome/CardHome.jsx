
import React from 'react';
import {Btn, Title} from './CardHome.styled'

const CardHome = ({  title, content,  }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Btn>{content}</Btn>
    </div>
  );
};

export default CardHome;
