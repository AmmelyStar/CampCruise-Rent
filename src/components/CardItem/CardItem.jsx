// import { useState } from 'react';
// import Buttons from '../../components/Button/Button';
// import BasicModal from 'components/Modal/Modal';
import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import favorIcon from '../../img/svg/heart.svg';
import Button from '../Button/Button';
import CustomModal from '../ModalComponent/ModalComponent';
import React, { useState } from 'react';

import {
  // Wrapper,
  // WrapperImage,
  // WrapperTitle,
  Title,
  Price,
  Description,
  Rating,
  RatingText,
  RatingContainer,
  Image,
  Reviews,
  Name,
  Location,
  ImgLocation,
  BoxLocation,
  StarsLocation,
  Wrapper,
  TextContent,
  Heart,
  PriceContainer,

} from './CardItemStyle';




const CardItem = ({ advert }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      <Image>
        <img src={advert.gallery[0]} alt={advert.name} />
      </Image>
      <TextContent>
        <Title>
          <Name>{advert.name}</Name>
          <PriceContainer>
            <Price>
              {' € '}
              {advert.price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: false,
              })}
            </Price>
            <Heart>
              <img src={favorIcon} alt={advert.name} />
            </Heart>
          </PriceContainer>
        </Title>

        <StarsLocation>
          <Rating>
            <RatingContainer>
              <img src={ratingIcon} alt={advert.name} />
            </RatingContainer>
            <RatingText> {advert.rating}</RatingText>
            <Reviews> ({advert.reviews.length} Reviews)</Reviews>
          </Rating>
          <Location>
            <ImgLocation>
              <img src={location} alt={advert.location} />
            </ImgLocation>
            <BoxLocation>{advert.location}</BoxLocation>
          </Location>
        </StarsLocation>
        <Description>{advert.description}</Description>
        <Button onClick={openModal} />
      </TextContent>
      {showModal && (
        <CustomModal
          isOpen={true}
          onClose={() => setShowModal(false)}
          advert={advert}
        />
      )}
    </Wrapper>
  );
};

export default CardItem;