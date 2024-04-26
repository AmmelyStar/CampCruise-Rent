import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'


export const Title = styled.h3`
font-family: Inter;
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 50%;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  width: 160px;
  color: ${theme.colors.gray};
  margin-bottom: 10px;

  @media screen and (min-width: 834px) and (max-width: 1439px){
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 50%;
  text-align: center;
  justify-content: center;
 
  }
   @media screen and (min-width: 1440px) {
  font-size: 30px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 50%;
  text-align: center;
  justify-content: center;
    width: 240px;
    
 
  }

`;

export const Btn = styled.div`
font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 50%;
 border-radius: 200px;
padding: 16px 40px;
width: 170px;
height: 56px;
padding-bottom: 32px;
color: ${theme.colors.white};
background-color: ${theme.colors.red};
 
    opacity: 0.8;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
    cursor: pointer;

  &:hover {
    background-color: #d84343;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px){
 font-size: 24px;
width: 173px;
height: 56px;   

  }

   @media screen and (min-width: 1440px) {
 font-size: 36px;
width: 223px;
height: 76px;
padding-bottom: 0; 
padding-top: 26px;

  }
`;