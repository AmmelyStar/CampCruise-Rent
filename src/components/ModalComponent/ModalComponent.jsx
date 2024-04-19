import React from 'react';
import  { useEffect, useState } from 'react';
import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import close from '../../img/svg/Close.svg';
import BookForm from '../BookForm/BookForm'
import RatingStars from '../RatingStars/RatingStars'

import {
   Automatic,
  Adults,
  Hob,
  Radio,
  CD,
  AirConditioner,
  Beds,
  Kitchen,
  Petrol,
  AC,
}
from '../Features/Features.styled'


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
  Wrapper,
  ContainerReviews,
  FeaturesContent,
  Avatar,
  AvaName,
  Stars,
  TextReviews,
  ListReviews
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
            </Wrap>
            <Wrapper>
              {isFeaturesActive && (
                <FeaturesContent>
                  <Adults advert={advert.adults} />
                  <Automatic  />
                  <AC details={advert.details.adults} />
                  <Petrol details={advert.details.kitchen} />
                  <Kitchen details={advert.details.kitchen} />
                  <Beds details={advert.details.beds} />
                  <AirConditioner details={advert.details.airConditioner} />
                  <CD details={advert.details.CD} />
                  <Radio details={advert.details.radio} />
                  <Hob details={advert.details.hob} />

                  <BookForm />
                </FeaturesContent>
              )}
              {isReviewsActive && (
                <ContainerReviews>
                  <ListReviews>
                    {advert.reviews.map((review, index) => (
                      <TextReviews key={index}>
                        <AvaName>
                          <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
                          <Stars>
                            {review.reviewer_name}
                            <RatingStars rating={review.reviewer_rating} />
                          </Stars>
                        </AvaName>

                        {review.comment}
                      </TextReviews>
                    ))}
                  </ListReviews>
                  <BookForm />
                </ContainerReviews>
              )}
            </Wrapper>
          </ModalContent>
        </Box>
      </ModalOverlay>
    )
  );
};

export default CustomModal;