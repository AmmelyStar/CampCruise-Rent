import styled from '@emotion/styled';
 import { theme } from '../../styled/Theme'


export const BookContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 10px;
padding: 24px;
padding: 24px;
width: 448px;
height: 532px;
background-color: white;
`;

export const Title = styled.h3`
font-weight: 600;
font-size: 20px;
line-height: 120%;
margin-bottom: 8px;
`;

export const SubTitle = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: rgba(16, 24, 40, 0.2);
margin-bottom: 24px;
`;

export const InputComment = styled.textarea`
border-radius: 10px;
padding: 18px;
width: 400px;
height: ${props => (props.large ? '114px' : '56px')};
margin-bottom: ${props => (props.last ? '24px' : '14px')};
background: ${theme.colors.white};
  font-weight: 400;
font-size: 16px;
line-height: 125%;
 border: none;
 outline: none;
 resize: vertical;
 &::placeholder {
    color: rgba(16, 24, 40, 0.2);
  }

   &:hover::placeholder,
   &:focus::placeholder,
  &:active::placeholder{
    color: ${theme.colors.black};
  
      }

      &:hover,
  &:focus,
  &:active {
    border: none; 
  }

   &::before {
    content: attr(placeholder);
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.6em; 
    line-height: 1.2em;
  }
`;


export const Input = styled.input`
border-radius: 10px;
padding: 18px;
width: 400px;
height: ${props => (props.large ? '114px' : '56px')};
margin-bottom: ${props => (props.last ? '24px' : '14px')};
background: ${theme.colors.white};
  font-weight: 400;
font-size: 16px;
line-height: 125%;
 border: none;
 outline: none;
 resize: vertical;
 &::placeholder {
    color: rgba(16, 24, 40, 0.2);
  }

   &:hover::placeholder,
   &:focus::placeholder,
  &:active::placeholder{
    color: ${theme.colors.black};
  
      }

      &:hover,
  &:focus,
  &:active {
    border: none; 
  }
`;

export const Button = styled.button`
border-radius: 200px;
padding: 16px 60px;
width: 160px;
height: 56px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.01em;

 background-color: ${theme.colors.red};
 color: ${theme.colors.white};
  &:hover,
  &:focus,
  &:active {
    background-color: #d84343;
  }
`;

