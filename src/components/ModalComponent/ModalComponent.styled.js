import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Box = styled.div`
 

  
`;

export const ModalContent = styled.div`
  background-color: white;
   border-radius: 20px;
padding: 40px;
width: 982px;
height: 720px;

`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

export const Description = styled.div`
  overflow: hidden; 
  margin-top: 24px;
  margin-bottom: 44px;
`;

export const Price = styled.div`
margin-bottom: 24px;
font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.colors.dark};
`;

export const StarsLocation = styled.div`
display: flex;
margin-bottom: 16px;

gap: 16px;

`;