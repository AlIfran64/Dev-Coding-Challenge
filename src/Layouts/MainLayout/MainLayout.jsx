import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='min-h-screen'>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;