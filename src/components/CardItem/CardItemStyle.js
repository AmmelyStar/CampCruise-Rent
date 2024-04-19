import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'


export const Wrapper = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 20px;
padding: 24px;
width: 888px;
height: 358px;


`;


export const Title = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
`;

export const Price = styled.div`

font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.colors.dark};
`;
export const Heart = styled.div`
  padding-top: 2px;
`;

export const PriceContainer = styled.div`
display: flex;
gap: 10px;
`;

export const Description = styled.p`
 font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.gray};
overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  width: 500px;
  
`;

export const Rating = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.dark};
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

  }
`;


export const Reviews = styled.span`
 margin-left: 4px;
  padding-top: 2px;

`;

export const Image = styled.div`
img {
object-fit:cover;
object-position: center;
    border-radius: 10px;
  width: 290px;
height: 310px;

  }
  display: flex;
  gap: 16px;
  

`;


export const Name = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.colors.dark};
 overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 360px;

`;



export const Location = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.dark};
margin-top: 4px;
`;

export const ImgLocation = styled.div`
 margin-right: 4px;
  padding-top: 2px;

`;

export const BoxLocation = styled.div`



`;

export const StarsLocation = styled.div`
display: flex;
gap: 16px;
margin-bottom: 24px;



`;

export const TextContent = styled.div`




`;