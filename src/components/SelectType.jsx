import * as React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { userInfo } from "../context/ContextProvider";
// eslint-disable-next-line react/prop-types

export function setCookie(name, value, days = 3) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export default function SelectType({ style, children }) {
  const [value, setValue] = React.useState("");
  const { language, setLanguage, saveData } = userInfo();
  if (
    value === "arabic" ||
    value === "english" ||
    value === "french" ||
    value === "spanish" ||
    value === "german"
  ) {
    setLanguage(value);
  }

  React.useEffect(() => {
    if (saveData === true) setCookie("lanuageCookie", language, 3);
  }, [language]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          value={value}
          onChange={handleChange}
          className="select"
          displayEmpty="false"
          inputProps={{ "aria-label": "Without label" }}
          sx={style}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
