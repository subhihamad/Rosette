import React, { useState, useEffect } from "react";
import SelectType from "./SelectType";
import { MenuItem } from "@mui/material";
import { userInfo } from "../context/ContextProvider";

const ChooseLanguage = () => {
  const { language , saveData } = userInfo();
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const getImageSource = (lang) => {
      switch (lang) {
        case "english":
          return "/Rosette/assets/united-kingdom.png";
        case "arabic":
          return "/Rosette/assets/saudi-arabia.png";
        case "french":
          return "/Rosette/assets/france.png";
        case "spanish":
          return "/Rosette/assets/spain.png";
        case "german":
          return "/Rosette/assets/germany.png";
        default:
          return "/Rosette/assets/united-kingdom.png";
      }
    };

    setImgSrc(getImageSource(language));
  },);
  console.log(language)
  return (
    <>
      <SelectType
        style={{
          borderRadius: "10px",
          width: "73px",
          height: "40px",
          borderColor: "#E3E2E0",
          color: "#979797",
          fontFamily: "Lucida Bright",
          fontSize: "18px",
        }}
      >
        <MenuItem  selected sx={{ margin: "0" }} value={language}>
          <img className="icon-flag" src={imgSrc} alt="flag" />
        </MenuItem>

        {language !== "english" && (
          <MenuItem value={"english"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/united-kingdom.png"
              alt="united kingdom"
            />
          </MenuItem>
        )}

        {language !== "arabic" && (
          <MenuItem value={"arabic"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/saudi-arabia.png"
              alt="saudi arabia"
            />
          </MenuItem>
        )}

        {language !== "french" && (
          <MenuItem value={"french"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/france.png"
              alt="france"
            />
          </MenuItem>
        )}
        {language !== "spanish" && (
          <MenuItem value={"spanish"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/spain.png"
              alt="spain"
            />
          </MenuItem>
        )}
        {language !== "german" && (
          <MenuItem value={"german"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/germany.png"
              alt="germany"
            />
          </MenuItem>
        )}
      </SelectType>
    </>
  );
};

export default ChooseLanguage;
