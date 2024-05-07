import styled from '@emotion/styled';
import { theme } from "../../styled/Theme"



export const Container = styled.div`
  display: flex;
 margin-top: 16px;
  margin-bottom: 16px;
  justify-content: center;

  @media screen and (min-width: 834px) {
  margin-right: 0;
   margin-top: 10px;
  margin-bottom: 10px;
  }
    @media screen and (min-width: 1440px) {
  margin-right: 0;
 margin-top: 16px;
  margin-bottom: 16px;  
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
    display: flex;
    flex-direction: column;
padding-top: 40px;
padding-bottom: 40px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 834px;
    padding: 20px;
  gap: 10px;
  padding-top: 40px;
padding-bottom: 10px;
    
  }
    @media screen and (min-width: 1440px) {
 justify-content: center;
    display: flex;
padding-top: 80px;
padding-bottom: 80px;
  margin: 0 auto;
   flex-direction: row;  
  }
`;

export const Wrap = styled.div`
  justify-content: center;
    display: flex;
  margin-top: 40px;

  @media screen and (min-width: 834px){
  padding-bottom: 40px;
    margin-top: 20px; 
  }
    @media screen and (min-width: 1440px) {
  margin-top: 40px;
  padding-bottom: 70px;
    
  }
`;





export const TextButton = styled.span`
  color: ${theme.colors.black};
  font-weight: 500;
font-size: 16px;
line-height: 150%;
  @media screen and (min-width: 834px){
font-size: 14px;
line-height: 120%;
    
  }

`;
export const Cont = styled.div`
  display: flex;
margin: 0 auto;
  @media screen and (min-width: 834px){
margin-top: 9px;
margin-right: 0;  
margin-left: 0; 
  }
    @media screen and (min-width: 1440px) {
margin-right: 80px;  
margin-left: 0; 
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;