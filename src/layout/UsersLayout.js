import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

import Modal from '../components/modal/Modal';

const UsersLayout = () => {
  const { open } = useSelector((state) => state.modal);
  const auth = useSelector((state) => state.auth)
  return <>
    <Header />
    <Outlet></Outlet>
    {open && <Modal />}
    
  </>
};

export default UsersLayout;
