import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 20px;
padding: 20px;
width: 335px;
height: 658px;
background-color: white;
text-align: start;
  @media screen and (min-width: 834px) and (max-width: 1439px){
    width: 540px;
    height: 250px;
    padding: 18px;
     gap: 18px;
       flex-direction: row;
  }
  @media screen and (min-width: 1440px){
     gap: 24px;
  padding: 24px;
border-radius: 20px;
padding: 24px;
width: 888px;
height: 358px;

       flex-direction: row;
  }
`;


export const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 12px;
gap: 10px;
text-align: center;
  @media screen and (min-width: 834px) and (max-width: 1439px){
text-align:start;
    margin-top: 0;
flex-direction: row;
gap: 0;
margin-bottom: 6px;
flex-direction: row;
    
  }
   @media screen and (min-width: 1440px){
 
margin-bottom: 8px;
flex-direction: row;
    
  }
`;

export const Price = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 125%;
color: black;
  @media screen and (min-width: 834px) and (max-width: 1439px){
   font-weight: 600;
font-size: 18px;
line-height: 100%;
    
  }
`;
export const Heart = styled.div`
  padding-top: 2px;
  cursor: pointer;
  @media screen and (min-width: 834px) and (max-width: 1439px){
  bottom: 6px;
  position: relative;

    
  }
`;

export const PriceContainer = styled.div`
display: flex;
 gap: 14px;
 text-align: center;
 justify-content: center;
  @media screen and (min-width: 834px) and (max-width: 1439px){
 gap: 8px;
  text-align: start;
 justify-content: start;
    
  }
   @media screen and (min-width: 1440px) {
gap: 10px;
    
  }
`;

export const Description = styled.p`
 font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.gray};
overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  width: 290px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
 font-weight: 400;
font-size: 14px;
line-height: 120%;
  width: 300px;
    
  }
   @media screen and (min-width: 1440px) {
  width: 500px;
  margin-top: 12px;
  margin-bottom: 12px;
    
  }
  
`;

export const Rating = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.dark};
  @media screen and (min-width: 834px) and (max-width: 1439px){
font-weight: 400;
font-size: 14px;
line-height: 120%;
    
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center; 
   margin-right: 4px;
`;

export const RatingText = styled.span`
 position: relative;
  padding-top: 2px; 


  ::after {
    content: '';
    position: absolute;
    left: -1px;
    bottom: 5px;
    display: block;
    width: 112px;
    height: 1px;
    background-color: black;
    border-radius: 3px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
left: -1px;
    bottom: 0px;
        width: 100px;
    
  }


  }
`;


export const Reviews = styled.span`
 margin-left: 4px;
  padding-top: 2px;

`;

export const Image = styled.div`

    img {
      display: flex;
object-fit:cover;
object-position: center;
    border-radius: 10px;
  width: 290px;
height: 210px;
   @media screen and (min-width: 834px) and (max-width: 1439px){
    width: 290px;
    height: 210px;
  } 
    @media screen and (min-width: 1440px){
    width: 290px;
    height: 310px;
  } 

   }
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
     gap: 10px;
  } 

`;


export const Name = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 125%;
color: black;
 overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 280px;

  @media screen and (min-width: 834px) and (max-width: 1439px){
  max-width: 176px;
  font-weight: 600;
font-size: 18px;
line-height: 100%;

  }
 

`;



export const Location = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.dark};
margin-top: 4px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
 font-weight: 400;
font-size: 14px;
line-height: 120%;
margin-top: 2px;
  }
`;

export const ImgLocation = styled.div`
 margin-right: 4px;
  padding-top: 2px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
 margin-right: 4px;
  padding-top: 0;
  }

`;

export const BoxLocation = styled.div`



`;

export const StarsLocation = styled.div`
display: flex;
gap: 16px;
/* margin-bottom: 24px; */
  @media screen and (min-width: 834px) and (max-width: 1439px){
gap: 10px;
/* margin-bottom: 16px; */
  }


`;

export const TextContent = styled.div`

@media screen and (min-width: 1440px) {
   width: 500px;

  }





`;

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
text-align: center;
margin-top: 30px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
    justify-content: start;
text-align: start;
margin-top: 14px;
  }
   @media screen and (min-width: 1440px) {
    justify-content: start;
text-align: start;
margin-top: 10px;

  }




`;

export const Bubble = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-bottom: 22px;
margin-top: 20px;

  @media screen and (min-width: 834px) and (max-width: 1439px){

gap: 8px;
margin-bottom: 10px;
margin-top: 8px;
  }
    @media screen and (min-width: 1440px) {

gap: 8px;
margin-bottom: 22px;
margin-top: 24px;
  }


`;