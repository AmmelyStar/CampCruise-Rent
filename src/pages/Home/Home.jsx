import React from 'react';
import {
  HomeStyle,
  Title,
  Wrap
  // Text,
  //  ImageOverlay,
} from './HomeStyle';

import CardHome from '../../components/CardHome/CardHome'
import Footer from 'components/Footer/Footer';
import bg from '../../img/BGBG.png';

const Home = () => {
  return (
    <>
      <HomeStyle>
        <img src={bg} alt=""  />
        <Title>Welcome to CampCruise-Rent!</Title>
        <Wrap>
          <CardHome title="Satisfied Customers:" content="1000+" />
          <CardHome title="Repeat Bookings:" content="70%" />
          <CardHome title="Camping Routes Available: " content="20+" />
        </Wrap>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
