/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Title,
  SubTitle,
  BookContainer,
  Input,
  Button,
  InputComment
} from './BookForm.styled';

const BookForm = () => {
  const [submitted, setSubmitted] = useState(false); 

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
            <Input type="date" placeholder="Booking date" />
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
