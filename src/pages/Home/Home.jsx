import React from 'react';
import car from '../../img/car.png'
import { HomeStyle, Text, Title, Box, Wrap, Wrapper, Container, Deko } from './HomeStyle';
import Footer from 'components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HomeStyle>
        <Text>
          <Title>Welcome to "CampCruise-Rent"!</Title>

          <Deko>
            We are delighted to welcome you to our website, where you can find
            everything you need for a comfortable and exciting outdoor
            adventure.
            <br />
            <br />
            We specializes in camper van and car rentals, offering a wide range
            of vehicles for any kind of adventure.
          </Deko>
        </Text>
        <Container>
          <Box>
            <Wrap>
              <strong>Vehicle Variety:</strong>
              <br />
              <br /> Compact vans to spacious RVs for every adventure.
            </Wrap>
            <Wrap>
              <strong>Quality and Safety:</strong>
              <br />
              <br /> Reliable vehicles with regular maintenance for your comfort
              and safety.
            </Wrap>
            <Wrap>
              <strong>Convenience:</strong>
              <br />
              <br /> Easy process, convenient pickup and drop-off locations.
            </Wrap>
            <Wrap>
              <strong>Expert Support:</strong>
              <br />
              <br /> Advice on routes and camping spots, technical assistance
              available.
            </Wrap>{' '}
          </Box>
          <Wrapper>
            <img src={car} alt="" width={550} height={320} />
          </Wrapper>
        </Container>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
