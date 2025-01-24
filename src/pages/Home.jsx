import React, { useEffect, useState } from 'react'
import AlertDialogSlide from '../components/Dialog';
import { getCookie, userInfo } from '../context/ContextProvider';
import PlaceholderPosts from '../components/PlaceholderPosts';

const Home = () => {
  let cookieValue = getCookie("lanuageCookie");
  let {saveData}=userInfo();
  return (
    <div>
      {!cookieValue  && saveData==="empty" &&  <AlertDialogSlide />}
      <PlaceholderPosts />
    </div>
  )
}

export default Home