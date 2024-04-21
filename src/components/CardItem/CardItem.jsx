import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import favorIcon from '../../img/svg/redHeard.svg';
import Button from '../Button/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToFavorites, removeFromFavorites } from '../../redux/actions'; 
import CustomModal from '../ModalComponent/ModalComponent'; 
import unfavoriteIcon from '../../img/svg/heart.svg'; 


import kitchen from '../../img/svg/Vector.svg';
import beds from '../../img/svg/beds.svg';
import air from '../../img/svg/air.svg';
import radio from '../../img/svg/radio.svg';
import hob from '../../img/svg/hob.svg';
import adults from '../../img/svg/adults.svg';


import {
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
  Bubble,
} from './CardItemStyle';

import {
  Adults,
  Hob,
  Radio,

  AirConditioner,
  Beds,
  Kitchen,

} from '../Features/Features.styled';




const CardItem = ({ advert }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(item => item._id === advert._id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(advert));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

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
            <Heart onClick={toggleFavorite}>
              <img
                src={isFavorite ? favorIcon : unfavoriteIcon}
                alt={advert.name}
              />
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
        <Bubble>
          <Adults>
            <img src={adults} alt="adults" />
            {advert.adults}
            adults
          </Adults>
          <Kitchen>
            <img src={kitchen} alt="kitchen" />
            {advert.details.kitchen} kitchen
          </Kitchen>
          <Beds>
            <img src={beds} alt="beds" />
            {advert.details.beds} beds
          </Beds>
          <AirConditioner>
            <img src={air} alt="air" />
            {advert.details.airConditioner} air conditioner
          </AirConditioner>
         
          <Radio>
            <img src={radio} alt="radio" />
            {advert.details.radio} Radio
          </Radio>
          <Hob>
            <img src={hob} alt="hob" />
            {advert.details.hob} hob
          </Hob>
        </Bubble>
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