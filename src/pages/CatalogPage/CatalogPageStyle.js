import styled from '@emotion/styled';
import {theme} from "../../styled/Theme"

export const WrapperSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  padding-left: 128px;
  padding-right: 128px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;



export const TextButton = styled.span`
  color: ${theme.colors.black};
  font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.01em;
`;