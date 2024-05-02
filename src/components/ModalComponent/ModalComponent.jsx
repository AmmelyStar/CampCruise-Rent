import React, { useEffect, useState } from 'react';
import ratingIcon from '../../img/icon/Rating.svg';
import location from '../../img/svg/location.svg';
import close from '../../img/svg/Close.svg';
import BookForm from '../BookForm/BookForm';
import RatingStars from '../RatingStars/RatingStars';

import kitchen from '../../img/svg/Vector.svg';
import ac from '../../img/svg/ac.svg';
import petrol from '../../img/svg/Petrol.svg';
import beds from '../../img/svg/beds.svg';
import air from '../../img/svg/air.svg';
import cd from '../../img/svg/cd.svg';
import radio from '../../img/svg/radio.svg';
import hob from '../../img/svg/hob.svg';
import adults from '../../img/svg/adults.svg';
import automatic from '../../img/svg/automatic.svg';

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
} from '../Features/Features.styled';

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
  ListReviews,
  FeaturesContainer,
  VehicleDetails,
  TitleDetails,
  FeaturesDetails,
  Details,
  FormTruck,
  LengthDetails,
  WidthDetails,
  HeightDetails,
  Tank,
  Consumption,
  Title,
  Image,
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


} from '../CardItem/CardItemStyle';

const CustomModal = ({ isOpen, onClose, advert }) => {
  const [isFeaturesActive, setIsFeaturesActive] = useState(true); // Set to true by default
  const [isReviewsActive, setIsReviewsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeaturesClick = () => {
    setIsFeaturesActive(true);
    setIsReviewsActive(false);
    setIsModalOpen(true);
  };

  const handleReviewsClick = () => {
    setIsReviewsActive(true);
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

  const formatData = data => {
    if (!data) return '';
    return (
      data.charAt(0).toUpperCase() +
      data.slice(1).replace(/(?<=\d)([^\d\s])/g, ' $1')
    );
  };

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
                <FeaturesContainer>
                  <FeaturesDetails>
                    <FeaturesContent>
                      <Adults>
                        <img src={adults} alt="adults" />
                        {advert.adults} adults
                      </Adults>
                      <Automatic>
                        <img src={automatic} alt="automatic" /> Automatic
                      </Automatic>
                      <AC>
                        <img src={ac} alt="ac" />
                        AC
                      </AC>
                      <Petrol>
                        <img src={petrol} alt="petrol" />
                        Petrol
                      </Petrol>
                      <Kitchen>
                        <img src={kitchen} alt="kitchen" />
                        kitchen
                      </Kitchen>
                      <Beds>
                        <img src={beds} alt="beds" />
                        {advert.details.beds} beds
                      </Beds>
                      <AirConditioner>
                        <img src={air} alt="air" />
                        {advert.details.airConditioner} air conditioner
                      </AirConditioner>
                      <CD>
                        <img src={cd} alt="cd" />
                        CD
                      </CD>
                      <Radio>
                        <img src={radio} alt="radio" />
                        Radio
                      </Radio>
                      <Hob>
                        <img src={hob} alt="hob" /> {advert.details.hob} hob
                      </Hob>
                    </FeaturesContent>
                    <VehicleDetails>
                      <TitleDetails>Vehicle details</TitleDetails>
                      <Details>
                        <FormTruck>
                          Form <div>{formatData(advert.form)}</div>
                        </FormTruck>
                        <LengthDetails>
                          Length <div>{formatData(advert.length)}</div>
                        </LengthDetails>
                        <WidthDetails>
                          Width <div>{formatData(advert.width)}</div>
                        </WidthDetails>
                        <HeightDetails>
                          Height <div>{formatData(advert.height)}</div>
                        </HeightDetails>
                        <Tank>
                          Tank <div>{formatData(advert.tank)}</div>
                        </Tank>
                        <Consumption>
                          Consumption{' '}
                          <div>{formatData(advert.consumption)}</div>
                        </Consumption>
                      </Details>
                    </VehicleDetails>
                  </FeaturesDetails>
                  <BookForm />
                </FeaturesContainer>
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
