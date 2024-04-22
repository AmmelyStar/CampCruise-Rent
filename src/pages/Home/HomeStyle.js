import styled from '@emotion/styled';
import { theme } from '../../styled/Theme'


export const HomeStyle = styled.div`
padding: 58px;
display: flex;
flex-direction: row-reverse;
gap: 60px;
background: ${theme.colors.white};

`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 46px;
  line-height: 125%;
  margin-bottom: 60px;
 text-align: center;
  border: 2px solid #ccc;
  padding: 20px;
   background-color: ${theme.colors.red};
    opacity: 0.8;
    width: 600px;
    height: 180px;
    border-radius: 10px;
    color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);


`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  margin-bottom: 20px;
  color: black;
  text-align: start;
  width: 1100px;

`;

export const Box = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;

`;


export const Wrap = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
   background-color: ${theme.colors.red};
    opacity: 0.8;
    width: 340px;
    height: 198px;
    border-radius: 10px;
    color: white;
     font-weight: 400;
  font-size: 26px;
  line-height: 125%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


export const Wrapper = styled.div`
 margin-left: 140px;
display: flex;
`;


export const Container = styled.div`
padding-left:40px;
display: flex;
flex-direction: column;

`;


export const Deko = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  margin-bottom: 20px;
  color: black;
  text-align: start;
  border: 2px solid #ccc;
  padding: 20px;
   background-color: ${theme.colors.red};
    opacity: 0.8;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);


`;