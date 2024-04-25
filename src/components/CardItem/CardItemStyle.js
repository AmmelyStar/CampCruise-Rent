import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'


export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 20px;
padding: 24px;
width: 888px;
height: 358px;
background-color: white;
text-align: start;
  @media screen {min-width: 834px and (max-width: 1439px);
    width: 540px;
    height: 250px;
    padding: 18px;
     gap: 18px;

    
  }

`;


export const Title = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
  @media screen {min-width: 834px and (max-width: 1439px);
    margin-bottom: 6px;
    
  }
`;

export const Price = styled.div`

font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.colors.dark};
@media screen {min-width: 834px and (max-width: 1439px);
   font-weight: 600;
font-size: 18px;
line-height: 100%;
    
  }
`;
export const Heart = styled.div`
  padding-top: 2px;
  cursor: pointer;
  @media screen {min-width: 834px and (max-width: 1439px);
  padding-top: 0;

    
  }
`;

export const PriceContainer = styled.div`
display: flex;
gap: 10px;
@media screen {min-width: 834px and (max-width: 1439px);
 gap: 8px;
    
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
  width: 500px;
  @media screen {min-width: 834px and (max-width: 1439px);
 font-weight: 400;
font-size: 14px;
line-height: 120%;
  width: 300px;
    
  }
  
`;

export const Rating = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.colors.dark};
  @media screen {min-width: 834px and (max-width: 1439px);
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
      @media screen {min-width: 834px and (max-width: 1439px);
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
object-fit:cover;
object-position: center;
    border-radius: 10px;
  width: 290px;
height: 310px;
  @media screen {min-width: 834px and (max-width: 1439px);
    width: 190px;
    height: 210px;
  }


  }
  display: flex;
  gap: 16px;
   @media screen {min-width: 834px and (max-width: 1439px);
     gap: 10px;
  }
  

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
    @media screen {min-width: 834px and (max-width: 1439px);
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
    @media screen {min-width: 834px and (max-width: 1439px);
 font-weight: 400;
font-size: 14px;
line-height: 120%;
margin-top: 2px;
  }
`;

export const ImgLocation = styled.div`
 margin-right: 4px;
  padding-top: 2px;
      @media screen {min-width: 834px and (max-width: 1439px);
 margin-right: 4px;
  padding-top: 0;
  }

`;

export const BoxLocation = styled.div`



`;

export const StarsLocation = styled.div`
display: flex;
gap: 16px;
margin-bottom: 24px;
   @media screen {min-width: 834px and (max-width: 1439px);
gap: 10px;
margin-bottom: 16px;
  }


`;

export const TextContent = styled.div`




`;

export const Bubble = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-bottom: 22px;
margin-top: 24px;
  @media screen {min-width: 834px and (max-width: 1439px);

gap: 6px;
margin-bottom: 8px;
margin-top: 12px;
  }


`;