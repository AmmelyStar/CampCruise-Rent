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
    z-index: 1000;
  
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
color: ${theme.colors.gray}; 
  margin-top: 24px;
  margin-bottom: 44px;
   display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

export const ReviewsSection = styled.li`
color: ${theme.colors.black};
  position: relative;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 5px; 
      background-color: ${theme.colors.red}; 
    }
  }
`;

export const Features = styled.li`
 color: ${theme.colors.black};
  position: relative;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 5px; 
      background-color: ${theme.colors.red}; 
    }
  }

`;

export const Wrap = styled.ul`
display: flex;
margin-bottom: 24px;
gap: 40px;
  position: relative;
  
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 2px; 
      background-color:  rgba(16, 24, 40, 0.2);; 
    }
`;