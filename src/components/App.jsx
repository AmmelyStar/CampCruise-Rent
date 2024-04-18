import { Global } from '@emotion/react';
import {globalStyles} from '../styled/GlobalStyles';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home'
import Catalog from '../pages/CatalogPage/CatalogPage'
import Favorite from '../pages/FavoritesPage/FavoritesPage'

export const App = () => {
  return (
    <>

      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
