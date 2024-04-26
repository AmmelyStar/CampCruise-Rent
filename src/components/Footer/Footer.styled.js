import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'




export const FooterContainer = styled.footer`
  background-color: ${theme.colors.red};
    opacity: 0.8;
  padding: 20px;
  /* position: fixed; 
   bottom: 0; */
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 834px) and (max-width: 1439px){

 
    
  }
  

`;

export const Text = styled.p`
 text-align: center;
  color: ${theme.colors.white};
  font-size: 20px;
  margin-bottom: 14px;
`;

export const GitHubLink = styled.a`
   color: ${theme.colors.white};
   padding-top: 8px;
`;


export const ImgBox= styled.img`
top: -10px;
width: 30px;
height: 30px;

`;

export const NavBox = styled.div`
justify-content: center;
display: flex;
text-align: center;
gap: 10px;
`;