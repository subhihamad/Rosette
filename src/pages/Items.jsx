import  { useState } from "react";
import { Link } from "react-router-dom";
import SelectType from "../components/SelectType";
import SearchIcon from "@mui/icons-material/Search";
import ItemCards from "../components/ItemCards";
import { MenuItem } from "@mui/material";
const Items = () => {
  const [value, setValue] = useState("");
  return (
    <main className="xl:mt-8">
      <div className="flex flex-wrap xl:justify-between items-center">
        <div className="flex flex-1 max-xl:mt-8 items-center max-xl:justify-between gap-10">
          <p className="text-logo font-primary text-[18px]">
            <Link to="addItem">
              <span className="mr-2 ">+</span>Add Item
            </Link>
          </p>
          <SelectType
            style={{
              borderRadius: "15px",
              width: "150px",
              borderColor: "#E3E2E0",
              color: "#979797",
              textAlign: "center",
              fontFamily: "Lucida Bright",
              fontSize: "18px",
            }}
          >
            <MenuItem value="">
              <em>All Products</em>
            </MenuItem>
            <MenuItem value={"sales"}>Sales</MenuItem>
            <MenuItem value={"bouquets"}>Bouquets</MenuItem>
            <MenuItem value={"indoorPlants"}>Indoor Plants</MenuItem>
          </SelectType>
        </div>
        <div className="border w-full border-[#E3E2E0] xl:mb-0 mb-5 xl:w-[350px] p-3 rounded-[15px]">
          <SearchIcon sx={{ color: "#979797", marginRight: "5px" }} />
          <input
            className="focus:outline-none font-primary"
            type="search"
            placeholder="Search Flower Types"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className=" cardParent xl:gap-4 gap-2 items-center xl:mt-8">
        <ItemCards />
      </div>
    </main>
  );
};

export default Items;
