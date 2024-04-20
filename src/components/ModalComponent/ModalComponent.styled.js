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
  top: 40px;
  display: flex;
  position: fixed;  
`;

export const ModalContent = styled.div`
 margin-top: 50px;
  background-color: white;
   border-radius: 20px;
padding: 40px;
width: 982px;
max-height: 80vh;
overflow-y: auto;
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
font-weight: 400;
font-size: 16px;
line-height: 150%;
  margin-top: 24px;
  margin-bottom: 44px;
   display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
    font-family: "ABeeZee", sans-serif;
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

export const ReviewsSection = styled.a`
font-weight: 600;
font-size: 20px;
line-height: 120%;
   cursor: pointer;
color: ${theme.colors.black};
  position: relative;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 5px; 
      background-color: ${theme.colors.red}; 
    }
  }
   &.active::before  {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.red}; 
  }
`;

export const Features = styled.a`
font-weight: 600;
font-size: 20px;
line-height: 120%;
 color: ${theme.colors.black};
    cursor: pointer;
  position: relative;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 5px; 
      background-color: ${theme.colors.red}; 
   
    }
  }

    &.active::before  {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.red}; 
  }

`;

export const Wrap = styled.div`
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
      background-color:  rgba(16, 24, 40, 0.2);
  
    }
`;

export const Wrapper = styled.div`
display: flex;
margin-top: 64px;
gap: 24px;



`;

export const FeaturesContent = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px ;
margin: 0 auto;
height: 200px;
width: 400px;


`;

export const FeaturesContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;



`;


export const ReviewsModal = styled.ul`
width: 902px;
height: 532px;
background-color: white;
border-radius: 20px;
padding: 40px;

`;


export const ContainerReviews = styled.div`
display: flex;
gap: 10px;

`;



export const Avatar = styled.div`
border-radius: 60px;
width: 60px;
height: 60px;
background-color: #F2F4F7;font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.colors.red}; 
justify-content: center;
text-align: center;
padding: 15px;
margin-bottom: 16px;


`;

export const AvaName = styled.div`
display: flex;
gap: 16px;



`;

export const Stars = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 133%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 4px;
width: 200px;


`;

export const TextReviews = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #475467;
width: 430px;
margin-bottom: 24px;
font-family: "ABeeZee", sans-serif;
`;

export const   ListReviews = styled.ul`
width: 430px;
`;

export const FeaturesDetails = styled.div`
display: flex;
flex-direction: column;
gap: 44px;
`;

export const VehicleDetails = styled.div`
display: flex;
flex-direction: column;


`;
export const TitleDetails = styled.h3`
font-weight: 600;
font-size: 20px;
line-height: 120%;
position: relative;

&::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -24px; 
      width: 100%;
      height: 2px; 
      background-color:  rgba(16, 24, 40, 0.2);
  
    }
`;

export const Details = styled.div`
display: flex;
flex-direction: column;
margin-top: 48px;
gap: 14px;



`;

export const HeightDetails = styled.div`
display: flex;
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;
justify-content: space-between;
`;
export const WidthDetails = styled.div`
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;
justify-content: space-between;
display: flex;
`;
export const LengthDetails = styled.div`
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;
justify-content: space-between;
display: flex;
`;
export const Tank = styled.div`
justify-content: space-between;
display: flex;
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;

`;
export const Consumption = styled.div`
justify-content: space-between;
display: flex;
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;

`;

export const  FormTruck = styled.div`
justify-content: space-between;
display: flex;
font-weight: 700;
font-size: 18px;
line-height: 133%;
text-align: center;

`;



  
   