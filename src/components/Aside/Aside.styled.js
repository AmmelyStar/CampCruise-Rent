import styled from "@emotion/styled";
export const AsideContainer = styled.aside`
  float: left;
  text-align: start;
    @media screen and (min-width: 834px) and (max-width: 1439px){
     width: 230px; 
     padding-left: 0;
 
  }
  @media screen and (min-width: 1440px) {
  width: 420px;
    padding-left: 64px;
  }
`;

export const BtnVisibl = styled.button`
 display: flex;
   background: none;
  img {
    margin-left: 8px;
    margin-top: 3px;
    background: none;
     transform: rotate(180deg);
    transition: transform 0.3s ease;
    &.rotated {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 833px) {
  display: none;
  }
`;

export const TabDesk = styled.div`
 display: none;
   @media screen and (min-width: 833px) {
  display: flex;
  flex-direction: column;
  }
`;



export const FormLocation = styled.form`
text-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
     @media screen and (min-width: 834px) {
       width: 360px;
  }
     @media screen and (min-width: 1440px) {
      gap: 8px;
  margin-bottom: 32px;
  }

  

  label {
    color: rgba(16, 24, 40, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    width: 100px;
      @media screen and (min-width: 834px) and (max-width: 1439px){
      font-size: 14px;
        line-height: 18px;
  }
  }
  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 10px;
    border: none;
    background: rgb(247, 247, 247);
width: 290px;
height: 40px;
    padding-left: 44px;
    padding-bottom:18px;
    padding-top:18px;

  @media screen and (min-width: 834px) {
    width: 200px;  
  }
   @media screen and (min-width: 1440px) {
    width: 300px;  
  }
  
}
  svg {
    width: 18px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 18px;
     @media screen and (min-width: 834px) {
width: 18px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
    position: absolute;
    z-index: 1;
    top: 34px;
    left: 18px;
  }
    @media screen and (min-width: 1440px) {
width: 18px;
    height: 20px;
    fill: transparent;
    stroke: #101828;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 18px;
  }
  }
`;

export const TitlePage = styled.h5`
  color: rgb(71, 84, 103);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
margin-left: 100px;
  margin-bottom: 14px;
 

  @media screen and (min-width: 834px) and (max-width: 1439px){
      font-size: 14px;
        line-height: 18px;
         text-align: left;
         margin-left: 0;
  }
   @media screen and (min-width: 1440px) {
      font-size: 18px;
         text-align: left;
         margin-left: 0;
  }
`;
export const TitleList = styled.h6`
  color: rgb(16, 24, 40);
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) and (max-width: 1439px){
      font-size: 18px;
        line-height: 18px;
          text-align: start;
          margin-bottom: 0;
          margin-top: 0;
  }
    @media screen and (min-width: 1440px) {
    text-align: left;
      font-size: 20px;
  margin-bottom: 24px;
     text-align: start;
         margin-bottom: 10px;
          margin-top: 10px;
  }
`;
export const Button = styled.button`
  width: 173px;
  height: 56px;
  padding: 16px 60px;
  border-radius: 200px;
  border: none;
  background: rgb(228, 72, 72);
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 834px) and (max-width: 1439px){
     font-size: 14px;
  line-height: 18px;
    width: 130px;
  height: 40px;
  padding: 12px 20px;
  margin: 0;
  }
   @media screen and (min-width: 1440px) {
      width: 173px;
  height: 56px;
  padding: 16px 60px;
  font-size: 16px;
    margin: 0;

  }
  &:hover {
    background: rgb(216, 67, 67);
  }
`;
export const FormFilter = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 32px;
  padding-top: 24px;
    width: 190px;
    margin-left: 50px;
    
  @media screen and (min-width: 834px) and (max-width: 1439px){
    margin-left: 0;
  width: 190px;
    
  }
   @media screen and (min-width: 1440px) {
    margin-left: 0;
    width: 100%;

  }
  input {
    opacity: 0;
    position: absolute;
  }
`;
export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  width: 90px;
  height: 80px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  cursor: pointer;
  @media screen and (min-width: 834px) {
   gap: 6px;
  width: 90px;
  height: 80px;
  }
    @media screen and (min-width: 1440px) {
    width: 110px;
  height: 95px;


    
  }
  &:hover {
    border-color: rgb(216, 67, 67);
  }
  span {
    color: rgb(16, 24, 40);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  @media screen and (min-width: 834px) {
 font-size: 12px;
    line-height: 16px;

    
  }
   @media screen and (min-width: 1440px) {
   font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    
  }
  }
  svg {
    width: 32px;
    height: 32px;
    fill: transparent;
    stroke: #101828;
  }
  @media screen and (min-width: 834px) and (max-width: 1439px){


    
  }
`;
export const FormFilterRadio = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 32px;
  padding-top: 24px;
      width: 190px;
          margin-left: 50px;
  input {
    opacity: 0;
    position: absolute;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px){
  flex-wrap: wrap;
    width: 190px; 
        margin-left: 0;
  }
   @media screen and (min-width: 1440px) {
  flex-wrap: wrap;
    width: 100%; 
        margin-left: 0;
  }
`;
export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90px;
  height: 80px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
   gap: 6px;
  width: 90px;
  height: 80px;
  padding-top: 6px;
  padding-bottom: 4px;
  }
   @media screen and (min-width: 1440px) {
   width: 110px;
  height: 95px;
    gap: 8px;
  }
  cursor: pointer;
  &:hover {
    border-color: rgb(216, 67, 67);
  }
  span {
    color: rgb(16, 24, 40);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  @media screen and (min-width: 834px) and (max-width: 1439px){
 font-size: 12px;

    line-height: 16px;

    
  }
   @media screen and (min-width: 1440px) {
   font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    
  }
  }
  svg {
    width: 30px;
    height: 40px;
    fill: transparent;
    stroke: #101828;
      @media screen and (min-width: 834px) {
    width: 40px;
    height: 40px;
      fill: transparent;
    stroke: #101828;
    
  }
  }
`;



  export const Select = styled.select`
  border-radius: 10px;
  padding: 18px 218px 18px 18px;
  width: 356px;
  height: 56px;

   background: rgb(247, 247, 247);
  font-size: 16px;
  color: #333;
  font-weight: 400;
font-size: 16px;
line-height: 125%;
  cursor: pointer;

  option {
    background-color: #fff;
    color: #333;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media screen and (min-width: 834px) {
    width: 230px;
  }

  @media screen and (min-width: 1440px) {
    width: 356px;
  }
`;