import React from 'react';
import car from '../../img/car.png'
import { HomeStyle, Text, Title, Box } from './HomeStyle';

const Home = () => {
  return (
    <HomeStyle>
      <Text>
        <Title>Welcome to "CampCruise-Rent"!</Title>
        We are delighted to welcome you to our website, where you can find
        everything you need for a comfortable and exciting outdoor adventure.
        "Company Name" specializes in camper van and car rentals, offering a
        wide range of vehicles for any kind of adventure.
      </Text>
      <Box>
        {' '}
        <img src={car} alt="" width={700} />
      </Box>
    </HomeStyle>
  );
};

export default Home;
