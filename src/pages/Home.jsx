import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { productItems } from '../constants';
import AlertDialogSlide from '../components/Dialog';
import { getCookie } from '../context/ContextProvider';

const Home = () => {
  let cookieValue = getCookie("lanuageCookie");
  return (
    <div>
      {!cookieValue && <AlertDialogSlide />}
    </div>
  )
}

export default Home