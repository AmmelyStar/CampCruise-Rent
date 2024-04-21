import styled from '@emotion/styled';
import {theme} from "../../styled/Theme"

export const Container = styled.div`
  display: flex;
 margin-top: 16px;
  margin-bottom: 16px;
  justify-content: center;


`;

export const Wrapper = styled.div`
  justify-content: center;
    display: flex;
    flex-direction: column;
padding-top: 80px;
padding-bottom: 80px;

  


`;

export const Wrap = styled.div`
  justify-content: center;
    display: flex;
  margin-top: 40px;
  padding-bottom: 70px;



`;




export const TextButton = styled.span`
  color: ${theme.colors.black};
  font-weight: 500;
font-size: 16px;
line-height: 150%;

`;