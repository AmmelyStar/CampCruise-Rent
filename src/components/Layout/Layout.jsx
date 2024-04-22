import React from 'react';

import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

// import { Wrapp } from './LayoutStyle';




const Layout = () => {
  return (
    <>


        <Header />

      <Outlet />
   


      
    </>
  );
};

export default Layout;


