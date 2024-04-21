import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 80px;
  margin-top: 40px;
  margin-bottom: 140px;
`;


export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  margin-bottom: 40px;
`;

export const ImgBox = styled.span`
  margin-left: 8px;
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
