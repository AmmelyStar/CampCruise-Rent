import React from 'react';

import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
// import { Wrapp } from './LayoutStyle';




const Layout = () => {
  return (
    <>


        <Header />

      <Outlet />
      <Footer/>


      
    </>
  );
};

export default Layout;


