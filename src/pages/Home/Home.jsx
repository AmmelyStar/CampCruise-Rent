import React from 'react';
import {
  HomeStyle,
  Text,
  Title,
   ImageOverlay,
} from './HomeStyle';
import Footer from 'components/Footer/Footer';
import bg from '../../img/bgHome23.png';

const Home = () => {
  return (
    <>
      <HomeStyle>
        <ImageOverlay>
          <img src={bg} alt="" width={1440} height={950} />
          <Title>Welcome to "CampCruise-Rent"!</Title>
          <Text>
          
              We are delighted to welcome you to our website, where you can find
              everything you need for a comfortable and exciting outdoor
              adventure.         
          </Text>
        </ImageOverlay>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
