import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../redux/actions';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES: // Додано обробку нового типу дії
      return {
        ...state,
        favorites: state.favorites.filter(advert => advert.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;