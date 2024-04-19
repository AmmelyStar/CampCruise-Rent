/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';
import { theme } from '../../styled/Theme';
import calendar from '../../img/svg/calendar.svg'

import {
  Title,
  SubTitle,
  BookContainer,
  Input,
  Button,
  InputComment
} from './BookForm.styled';

const StyledDatePicker = styled(DatePicker)`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  background: ${theme.colors.white};
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  border: none;
  outline: none;
  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: right 20px center;

  &::placeholder {
    color: rgba(16, 24, 40, 0.2);
  }

  &:hover::placeholder,
  &:focus::placeholder,
  &:active::placeholder {
    color: ${theme.colors.black};
  }

  &:hover,
  &:focus,
  &:active {
    border: none;
  }

  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        background: ${theme.colors.white};
      }
    }
  }
`;

const BookForm = () => {
  const [submitted, setSubmitted] = useState(false); 
   const [bookingDate, setBookingDate] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true); 
     toast.success('Form send successfully!');    
  };
  return (
    <>
      <BookContainer>
        <Title>Book your campervan now</Title>
        <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
        <form onSubmit={handleSubmit}>
          <label>
            <Input type="text" placeholder="Name" />
          </label>
          <label>
            <Input type="email" placeholder="Email" />
          </label>
          <label>
            <StyledDatePicker
              selected={bookingDate}
              onChange={date => setBookingDate(date)}
              placeholderText="Booking date"
              dateFormat="dd-MM-yyyy"
            />
          </label>
          <label>
            <InputComment type="text" placeholder="Comment" large last />
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </BookContainer>
      <ToastContainer />
    </>
  );
};

export default BookForm;
