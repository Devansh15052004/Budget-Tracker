// import React from 'react';
import SideBar from './SideBar';
import "./layout.css"
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
