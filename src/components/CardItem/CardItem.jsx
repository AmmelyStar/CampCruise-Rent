import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import favorIcon from '../../img/svg/redHeard.svg';
import Button from '../Button/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Імпорт useDispatch та useSelector
import { addToFavorites, removeFromFavorites } from '../../redux/actions'; // Імпорт екшенів
import CustomModal from '../ModalComponent/ModalComponent'; // Імпорт CustomModal
import unfavoriteIcon from '../../img/svg/heart.svg'; 

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
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(item => item.id === advert.id);

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