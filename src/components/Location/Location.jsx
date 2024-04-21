import React, { useState } from 'react';
import { Input, Title } from './Location.styled';
import location from '../../img/svg/location.svg';

const Location = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Здесь вы можете выполнить поиск по городу (например, с помощью API)
    console.log('Searching for city:', city);
  };

  const handleChange = event => {
    setCity(event.target.value);
  };

  return (
    <>
      <Title>Location</Title>
      <form onSubmit={handleSearch}>
        <label>
          <img src={location} alt="" />
          <Input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default Location;
