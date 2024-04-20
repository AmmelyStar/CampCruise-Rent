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
min-height: 532px;
background-color: white;
 & .react-datepicker__header {
    background: white;
    border-bottom: 0;
  }

  .react-datepicker {
        border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 12px;
padding: 16px;
width: 325px;

}

.react-datepicker__month-container {
    float: none;
}

.react-datepicker__month {
    margin: 0;
    text-align: center;
    width: 293px;
}

.react-datepicker__week {
    white-space: nowrap;
    justify-content: space-between;
    display: flex;
}



  .react-datepicker__current-month, 
  .react-datepicker-time__header, 
  .react-datepicker-year-header {
    font-weight: 600;
font-size: 16px;
line-height: 120%;
text-align: center;
margin-bottom: 20px;
  }
 .react-datepicker__navigation--next {
top: 20px;
    
}
.react-datepicker__navigation--previous {
top: 20px;

    
}

.react-datepicker__navigation-icon::before{
  border-color: black;
   border-radius: 12%;


}

.react-datepicker__day-names {
    font-weight: 600;
font-size: 12px;
line-height: 120%;
text-align: center;
margin-bottom: 6px;
justify-content: space-between;
    display: flex;
    text-transform: uppercase;

}
.react-datepicker__day-name, 
.react-datepicker__day, 
.react-datepicker__time-name {
     color: ${theme.colors.gray}; 
}




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
color: #475467;
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

