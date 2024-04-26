import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  margin-top: 10px;
  margin-bottom: 140px;
   @media screen {min-width: 834px and (max-width: 1439px);
  padding-top: 20px;
  padding-bottom: 50px;
  margin-top: 10px;
  margin-bottom: 0;
    
  }
`;


export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  margin-bottom: 40px;
    @media screen and (min-width: 834px) and (max-width: 1439px){
    margin-bottom: 26px;
     font-size: 20px;
  line-height: 100%;

    
  }
`;

export const ImgBox = styled.span`
  margin-left: 8px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
bottom: 2px;
position: relative;
    
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center; 

`;

export const Text = styled.p`
  font-weight: 500;
font-size: 20px;
line-height: 150%;
letter-spacing: -0.01em; 
color: ${theme.colors.black};
margin-bottom: 20px;

`;





export const Button = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.01em;
color: ${theme.colors.white};
  border-radius: 200px;
padding: 16px 40px;
width: 173px;
height: 56px;
color: ${theme.colors.white};
background-color: ${theme.colors.red};
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
export const TextBtn = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.01em;
color: ${theme.colors.white};
  
`;
