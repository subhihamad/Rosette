import * as React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// eslint-disable-next-line react/prop-types
export default function SelectType({style,children}) {
  const [value, setValue] = React.useState("");
  console.log(value);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={handleChange}
          className="select"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={style}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}

