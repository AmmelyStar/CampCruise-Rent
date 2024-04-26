import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';

export const HomeStyle = styled.div`
  position: relative;
  @media screen {min-width: 834px and (max-width: 1439px);
    width: 834px;
    height: 750px;
    
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

