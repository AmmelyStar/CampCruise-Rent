import styled from '@emotion/styled';
import {theme} from '../../styled/Theme'


export const Title = styled.h3`
font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 50%;
  text-align: center;
  width: 160px;
  color: ${theme.colors.gray};

  @media screen {min-width: 834px and (max-width: 1439px);
 

    
  }

`;

export const Btn = styled.div`
font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 50%;
 border-radius: 200px;
padding: 10px 40px;
width: 173px;
height: 56px;
color: ${theme.colors.white};
background-color: ${theme.colors.red};
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;

@media screen {min-width: 834px and (max-width: 1439px);
/* padding: 10px 20px; */
width: 113px;
height: 26px;
padding-bottom: 32px;

  display: flex;
  justify-content: center;

    
  }
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;