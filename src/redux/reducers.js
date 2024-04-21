import { combineReducers } from 'redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(advert => advert._id !== action.payload._id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // other reducers if any
});

export default rootReducer;