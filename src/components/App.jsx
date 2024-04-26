import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Global } from '@emotion/react';
import { globalStyles } from '../styled/GlobalStyles';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Catalog from '../pages/CatalogPage/CatalogPage';
import Favorite from '../pages/FavoritesPage/FavoritesPage';


import 'uikit/dist/css/uikit.min.css';


UIkit.use(Icons);

export const App = () => {
  useEffect(() => {
    const offcanvasNav = document.getElementById('offcanvas-nav');
    if (offcanvasNav) {
      UIkit.offcanvas(offcanvasNav).hide();
    }
  }, []);

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
