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



  & .react-datepicker-wrapper {
    & .react-datepicker__input-container {
      input {
        background: ${theme.colors.white};
      }
    }
  }
`;

const BookForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      toast.success('Form sent successfully!');
      // Here you would typically submit the form data to your backend
      // Reset form fields
      setName('');
      setEmail('');
      setBookingDate(null);
      setComment('');
    } else {
      toast.error('Please fill in all required fields correctly!');
    }
    setErrors(errors);
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!bookingDate) {
      errors.bookingDate = 'Booking date is required';
    }
   
    return errors;
  };

   const filterDate = date => {
     const currentDate = new Date();
     return date >= currentDate;
   };

  return (
    <>
      <BookContainer>
        <Title>Book your campervan now</Title>
        <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
        <form onSubmit={handleSubmit}>
          <label>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ borderColor: errors.name ? 'red' : '' }}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </label>
          <label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ borderColor: errors.email ? 'red' : '' }}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email}</span>
            )}
          </label>
          <label>
            <StyledDatePicker
              selected={bookingDate}
              onChange={date => setBookingDate(date)}
              placeholderText="Booking date"
              dateFormat="dd-MM-yyyy"
              customInput={
                <Input
                  style={{ borderColor: errors.bookingDate ? 'red' : '' }}
                />
              }
              filterDate={filterDate}
              formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
            />
            {errors.bookingDate && (
              <span style={{ color: 'red' }}>{errors.bookingDate}</span>
            )}
            {/* {bookingDate && bookingDate < new Date() && (
              <span
                style={{
                  color: 'rgba(16, 24, 40, 0.6)',
                  fontSize: '12px',
                  marginTop: '4px',
                }}
              >
                Please select current or future date
              </span>
            )} */}
          </label>
          <label>
            <InputComment
              type="text"
              placeholder="Comment"
              large
              last
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            {errors.comment && <span>{errors.comment}</span>}
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </BookContainer>
      <ToastContainer />
    </>
  );
};

export default BookForm;
