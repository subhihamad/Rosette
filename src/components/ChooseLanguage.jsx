import React, { useEffect } from "react";
import SelectType from "./SelectType";
import { MenuItem } from "@mui/material";
import { userInfo } from "../context/ContextProvider";
import { useNavigate, useParams } from "react-router";

const iconHeader = () => {};

const ChooseLanguage = () => {
  const { language, saveData } = userInfo();
  const navigate = useNavigate();
  console.log(window.location.pathname);

  const reload = () => {
    if (window.location.pathname !== "/Rosette/" && saveData) {
      navigate(0);
    }
  };

  console.log(language);
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
        <MenuItem sx={{ margin: "0" }} onClick={reload} value="">
          <img
            className="icon-flag"
            src={`${
              language === "english"
                ? "/Rosette/assets/united-kingdom.png"
                : language === "arabic"
                ? "/Rosette/assets/saudi-arabia.png"
                : language === "french"
                ? "/Rosette/assets/france.png"
                : language === "spanish"
                ? "/Rosette/assets/spain.png"
                : language === "german"
                ? "/Rosette/assets/germany.png"
                : null
            }`}
          />
        </MenuItem>

        {language !== "english" && (
          <MenuItem onClick={reload} value={"english"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/united-kingdom.png"
              alt="united kingdom"
            />
          </MenuItem>
        )}

        {language !== "arabic" && (
          <MenuItem onClick={reload} value={"arabic"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/saudi-arabia.png"
              alt="saudi arabia"
            />
          </MenuItem>
        )}

        {language !== "french" && (
          <MenuItem onClick={reload} value={"french"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/france.png"
              alt="france"
            />
          </MenuItem>
        )}
        {language !== "spanish" && (
          <MenuItem onClick={reload} value={"spanish"}>
            <img
              className="icon-flag"
              src="/Rosette/assets/spain.png"
              alt="spain"
            />
          </MenuItem>
        )}
        {language !== "german" && (
          <MenuItem onClick={reload} value={"german"}>
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
