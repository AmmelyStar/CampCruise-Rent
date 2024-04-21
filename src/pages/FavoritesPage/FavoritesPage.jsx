import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/actions';
import favorIcon from '../../img/svg/redHeard.svg';
import { Link } from 'react-router-dom'; 
import Footer from 'components/Footer/Footer';

import {
  Container,
  ImgBox,
  Title,
  Wrapper,
  Button,
  Text,
  TextBtn,
} from './FavoritesPageStyle';
import CardItem from 'components/CardItem/CardItem';




const Favorite = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const removeFavorite = advert => {
    dispatch(removeFromFavorites(advert));
  };

  return (
    <>
      <Container>
        <Title>
          Yours Favorites
          <ImgBox>
            <img src={favorIcon} alt="heart" />
          </ImgBox>
        </Title>

        {favorites.length > 0 ? (
          <Wrapper>
            {favorites.map(advert => (
              <CardItem key={advert._id} advert={advert}>
                <button onClick={() => removeFavorite(advert)}>Remove</button>
              </CardItem>
            ))}
          </Wrapper>
        ) : (
          <div>
            <Text>No favorites yet</Text>
            <Button>
              <Link to="/catalog">
                <TextBtn>Add favorites</TextBtn>
              </Link>
            </Button>
          </div>
        )}
      </Container>
      <Footer/>
    </>
  );
};

export default Favorite;
