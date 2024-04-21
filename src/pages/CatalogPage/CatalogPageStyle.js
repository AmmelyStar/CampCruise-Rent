import styled from '@emotion/styled';
import { theme } from "../../styled/Theme"

import pin from '../../img/svg/location.svg';
import pin_a from '../../img/svg/map-pin.svg';

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

export const Subtitle = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.gray};
  padding-bottom: 14px;
`;

export const TownInput = styled.input`
  margin-bottom: 32px;
  width: 360px;
  height: 56px;
  border-radius: 10px;
  padding-left: 48px;
  padding-top: 3px;
  color:  rgba(16, 24, 40, 0.6);
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  &::placeholder {
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
  background: ${theme.colors.lightgrey} url(${pin_a}) no-repeat;
  background-size: 20px;
  background-position: 18px 50%;

  :hover,
  :focus,
  :active {
    background: ${theme.colors.lightgrey} url(${pin}) no-repeat;
    background-size: 20px;
    background-position: 18px 50%;

    outline: none;
  }
`;