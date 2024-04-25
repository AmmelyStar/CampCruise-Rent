import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HomeStyle = styled.div`
  position: relative;
  @media screen {min-width: 834px and (max-width: 1439px);
    width: 834px;
    
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 120%);
  font-weight: 600;
  font-size: 36px;
  line-height: 125%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


export const Text = styled.div`
  position: absolute;
  transform: translate(-52%, 80%);
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: black;
  text-align: center;
top: 0%;
  left: 50%;
  width: 500px;
  height: 260px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 20px;
  background-color: ${theme.colors.white} 0.5;

  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;

export const Box = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Wrap = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 20px;
  background-color: ${theme.colors.red};
  opacity: 0.9;
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
  position: relative;
  z-index: 1;
  margin-left: 140px;
  display: flex;
`;

export const Container = styled.div`
  padding-left: 40px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const Deko = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  margin-bottom: 20px;
  color: black;
  text-align: center;
  width: 600px;
  height: 400px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 20px;
  background-color: ${theme.colors.white};
  opacity: 0.6;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;