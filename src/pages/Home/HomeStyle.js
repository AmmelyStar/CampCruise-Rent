import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HomeStyle = styled.div`
display: flex;
flex-direction: column;
  position: relative;
 
    .img{
      width: 100%;
    }
    
 
`;


export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${theme.colors.red};
  font-weight: 600;
  font-size: 36px;
  line-height: 125%;
  padding: 20px;
  text-align: center;
    @media screen and (min-width: 834px) and (max-width: 1439px){
     font-weight: 600;
  font-size: 44px;
  line-height: 125%;
  padding: 20px;
    
  }
     @media screen and (min-width: 1440px) {
     font-weight: 700;
  font-size: 48px;
  line-height: 125%;
  padding: 20px;
  margin-bottom: 20px;
    
  }
`;

export const Wrap = styled.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
padding-left: 20px;
padding-right: 20px;
gap: 30px;
 @media screen and (min-width: 834px) and (max-width: 1439px){
flex-direction: row;
padding-left: 20px;
padding-right: 20px;
gap: 100px;

    
  }
   @media screen and (min-width: 1440px) {
flex-direction: row;
padding-left: 20px;
padding-right: 20px;
gap: 250px;

    
  }
`;

