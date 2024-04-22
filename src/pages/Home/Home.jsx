import React from 'react';
import {
  HomeStyle,
  Text,
  Title,
  // Box,
  // Wrap,
  Wrapper,
  Container,

  ImageOverlay,
} from './HomeStyle';
import Footer from 'components/Footer/Footer';
import bg from '../../img/bgHome2.png';

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
             
              {/* We specialize in camper van and car rentals, offering a wide range
              of vehicles for any kind of adventure. */}
         
          </Text>
        </ImageOverlay>
        <Container>
          <Wrapper>
            {/* <Box>
              <Wrap>
                <strong>Vehicle Variety:</strong>
                <br />
                <br /> Compact vans to spacious RVs for every adventure.
              </Wrap>
              <Wrap>
                <strong>Quality and Safety:</strong>
                <br />
                <br /> Reliable vehicles with regular maintenance for your
                comfort and safety.
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
              </Wrap>
            </Box> */}
          </Wrapper>
        </Container>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
