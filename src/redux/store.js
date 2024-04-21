import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favorites');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('favorites', serializedState);
  } catch {
    // ignore write errors
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { favorites: loadState() },
});

store.subscribe(() => {
  saveState(store.getState().favorites);
});

export default store;