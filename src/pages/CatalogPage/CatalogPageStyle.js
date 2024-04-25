import styled from '@emotion/styled';
import { theme } from "../../styled/Theme"



export const Container = styled.div`
  display: flex;
 margin-top: 16px;
  margin-bottom: 16px;
  justify-content: center;
  margin-right: 80px;
    @media screen {min-width: 834px and (max-width: 1439px);
  margin-right: 0;
    
  }



`;

export const Wrapper = styled.div`
  justify-content: center;
    display: flex;
padding-top: 80px;
padding-bottom: 80px;
  margin: 0 auto;
   @media screen {min-width: 834px and (max-width: 1439px);
    width: 834px;
    padding: 20px;
  gap: 10px;
    
  }



  


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
 @media screen {min-width: 834px and (max-width: 1439px);

font-size: 14px;
line-height: 120%;
    
  }

`;
export const Cont = styled.div`
  display: flex;
margin-right: 80px;
 @media screen {min-width: 834px and (max-width: 1439px);

margin-right: 0;
    
  }


`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;



`;