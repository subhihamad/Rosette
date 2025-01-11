import React, { useState } from "react";
import SelectType from "../components/SelectType";
import { MenuItem } from "@mui/material";
import SelectGroup from "../components/SelectGroup";
import ColorsSelector from "../components/ColorsSelector";
import UploadFile from "../components/UploadFile";

const AddItem = () => {
  const [itemValues, setItemValues] = useState({
    name: "",
    price: "",
    category: "",
    colors: [],
  });
  const handleSubmit = () => {};
  return (
    <div className="lg:mt-8">
      <h1 className="text-logo font-primary mt-2 xl:text-3xl text-2xl ">Add new item</h1>

      <section className="xl:mt-5 mt-2">
        <form
          className="flex xl:justify-between xl:flex-row flex-col"
          method="GET"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <div className="flex flex-col">
              <label className="font-primary mb-2 text-xl " htmlFor="text">
                Item Name <span className="text-logo">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="exp: Tulips"
                name="text"
                id="text"
                value={itemValues.name}
                className="input-addItem"
                onChange={(e) =>
                  setItemValues((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="flex flex-col mt-5 ">
              <label className="font-primary mb-2 text-xl " htmlFor="price">
                Item Price <span className="text-logo">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="exp: $10"
                name="text"
                id="price"
                value={itemValues.price}
                className="input-addItem"
                onChange={(e) =>
                  setItemValues((prev) => {
                    return {
                      ...prev,
                      price: e.target.value,
                    };
                  })
                }
              />
            </div>
            <SelectGroup />
            <ColorsSelector />
            <button
            className="xl:block hidden save-btn"
            type="submit"
          >
            save
          </button>
          </div>
          <div className="xl:flex-1 xl:flex justify-center">
            <UploadFile />
          </div>
          <button
            className="xl:hidden block save-btn"
            type="submit"
          >
            save
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
