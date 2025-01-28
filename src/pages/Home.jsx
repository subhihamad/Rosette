import React, { useEffect, useState } from "react";
import AlertDialogSlide from "../components/Dialog";
import { getCookie, userInfo } from "../context/ContextProvider";
import PlaceholderPosts from "../components/PlaceholderPosts";
import { Link } from "react-router";

const Home = () => {
  let cookieValue = getCookie("lanuageCookie");
  let { language,saveData } = userInfo();
  return (
    <div>
      <div>
        <p className={`text-logo font-primary mt-8 text-nowrap xl:text-lg text-sm ${
          language === "arabic" ? "text-right" : "text-left"
        }`}>
          <Link to="addPost">
            <span className="mr-2 ">+</span>
            {language === "arabic"
              ? "إضافة مصدر"
              : language === "french"
              ? "création d'une ressource"
              : language === "spanish"
              ? "crear un recurso"
              : language === "german"
              ? "Erstellen einer Ressource"
              : "Create a resource"}
          </Link>
        </p>
      </div>
      {!cookieValue && saveData === "empty" && <AlertDialogSlide />}
      <PlaceholderPosts />
    </div>
  );
};

export default Home;
