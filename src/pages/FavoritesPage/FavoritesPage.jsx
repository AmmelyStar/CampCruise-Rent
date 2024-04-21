import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/actions';

const Favorite = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const removeFavorite = advert => {
    dispatch(removeFromFavorites(advert));
  };

  return (
    <div>
      <h2>Favorite</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(advert => (
            <li key={advert.id}>
              {advert.name}
              <button onClick={() => removeFavorite(advert)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
};

export default Favorite;
