export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'; // Додано новий тип дії

export const addToFavorites = advert => ({
  type: ADD_TO_FAVORITES,
  payload: advert,
});

export const removeFromFavorites = advert => ({ // Додана нова функція видалення зі списку улюблених
  type: REMOVE_FROM_FAVORITES,
  payload: advert,
});