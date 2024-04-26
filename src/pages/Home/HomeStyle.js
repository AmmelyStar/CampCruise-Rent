import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HomeStyle = styled.div`
display: flex;
flex-direction: column;
  position: relative;
  @media screen and (min-width: 834px) and (max-width: 1439px){
    width: 100%;
    height: 100%;
    .img{
      width: 834px;
    }
    
  }
`;


export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  color: ${theme.colors.red};
  font-weight: 600;
  font-size: 44px;
  line-height: 125%;
  padding: 20px;
  text-align: center;
`;

export const Wrap = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-left: 20px;
padding-right: 20px;
gap: 100px;
`;

