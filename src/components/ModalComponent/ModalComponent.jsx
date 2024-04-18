import React from 'react';
import  { useEffect } from 'react';
import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import close from '../../img/svg/Close.svg';


import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  Box,
  Description,
  Price,
  StarsLocation,
  Wrap,
  ReviewsSection,
  Features
} from './ModalComponent.styled';

import {
  Name,
  Rating,
  RatingContainer,
  RatingText,
  Reviews,
  Location,
  ImgLocation,
  BoxLocation,

  Image,
  Title,
} from '../CardItem/CardItemStyle';



const CustomModal = ({ isOpen, onClose, advert }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку при открытии модального окна
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = ''; // Разблокируем прокрутку при закрытии модального окна
    }

    return () => {
      document.body.style.overflow = ''; // Убираем стили блокировки прокрутки при удалении компонента
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <ModalOverlay onClick={onClose}>
        <Box>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Title>
              <Name>{advert.name}</Name>
              <CloseButton onClick={onClose}>
                <img src={close} alt="" />
              </CloseButton>
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
            <Price>
              {' € '}
              {advert.price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: false,
              })}
            </Price>
            <Image>
              {advert.gallery.map((image, index) => (
                <img key={index} src={image} alt={advert.name} />
              ))}
            </Image>
            <Description> {advert.description}</Description>
            <Wrap>
              <Features>Features</Features>
              <ReviewsSection>Reviews</ReviewsSection>
            </Wrap>
          </ModalContent>
        </Box>
      </ModalOverlay>
    )
  );
};

export default CustomModal;