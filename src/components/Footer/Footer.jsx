import React from 'react';
import gitHab from '../../img/GitHub-Symbol1.png'

import {
  FooterContainer,
  GitHubLink,
  ImgBox,
  Text,
  NavBox,
} from './Footer.styled';


const Footer = () => {
  return (
    <FooterContainer>
      <Text>&copy; 2024 Created by Anna Radchenko</Text>
      <NavBox>
        <ImgBox src={gitHab} alt="gitHab" />
        <GitHubLink
          href="https://github.com/AmmelyStar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </GitHubLink>
      </NavBox>
    </FooterContainer>
  );
};

export default Footer;
