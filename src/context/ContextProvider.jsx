import { createContext, useContext, useEffect, useState } from "react";
import { setCookie } from "../components/SelectType";

const context = createContext("");

export function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const ContextProvider = ({ children }) => {
  let cookieValue = getCookie("lanuageCookie");

  const [language, setLanguage] = useState(
    cookieValue ? cookieValue : "english"
  );
  const [saveData, setSaveData] = useState("empty");
  useEffect(() => {
    if (cookieValue) {
      setSaveData(true);
    } else if(saveData !== "empty"){
      function deleteCookie(name) {
        setCookie(name, "", -1);
      }
      setSaveData(false);
      deleteCookie("lanuageCookie");
    }
  }, [language]);

  return (
    <context.Provider
      value={{
        language,
        setLanguage,
        saveData,
        setSaveData,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;

export const userInfo = () => useContext(context);
