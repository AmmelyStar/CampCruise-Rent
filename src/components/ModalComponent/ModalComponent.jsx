import React from 'react';
import  { useEffect, useState } from 'react';
import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import close from '../../img/svg/Close.svg';
import BookForm from '../BookForm/BookForm'


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
  Features,
  // ReviewsModal
  ContainerReviews,
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

  const [isFeaturesActive, setIsFeaturesActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeaturesClick = () => {
    setIsFeaturesActive(!isFeaturesActive);
    setIsReviewsActive(false); 
    setIsModalOpen(true);
  };

  const handleReviewsClick = () => {
    setIsReviewsActive(!isReviewsActive);
    setIsFeaturesActive(false); 
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    (isOpen || isModalOpen) && (
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
              <Features
                onClick={handleFeaturesClick}
                className={isFeaturesActive ? 'active' : ''}
              >
                Features
              </Features>
              <ReviewsSection
                onClick={handleReviewsClick}
                className={isReviewsActive ? 'active' : ''}
              >
                Reviews
              </ReviewsSection>
              {isFeaturesActive && (
                <div>
                  <h3>Features</h3>
                  <ul>
                    {advert.reviews.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {isReviewsActive && (
                <ContainerReviews>
                  <BookForm/>
                  <h3>Reviews111</h3>
                  <ul>
                    {advert.reviews.map((review, index) => (
                      <li key={index}>
                        <strong>{review.author}</strong>: {review.comment}
                      </li>
                    ))}
                  </ul>
                </ContainerReviews>
              )}
            </Wrap>
          </ModalContent>
        </Box>
      </ModalOverlay>
    )
  );
};

export default CustomModal;