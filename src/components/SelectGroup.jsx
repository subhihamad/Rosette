import React, { useState } from "react";

const SelectGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [salesValue, setSalesValue] = useState("");
  const [bouquetsValue, setBouquetsValue] = useState("");
  const [indoorPlantsValue, setIndoorPlantsValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedLabel("");
  };

  const handleSalesChange = (event) => {
    setSalesValue(event.target.value);
    setSelectedLabel(`Sales:${event.target.value}`);
  };

  const handleBouquetsChange = (event) => {
    setBouquetsValue(event.target.value);
    setSelectedLabel(`Bouquets:${event.target.value}`);
  };

  const handleIndoorPlantsChange = (event) => {
    setIndoorPlantsValue(event.target.value);
    setSelectedLabel(`Indoor Plants:${event.target.value}`);
  };

  return (
    <>
      {!selectedLabel && (
        <div className="xl:max-w-md  rounded-xl  font-primary mt-8">
          {selectedCategory === "" ? (
            <div className="mb-4">
              <select
                id="parent-select"
                className="w-full p-[13px]  text-lg text-[#453A3C] cursor-pointer font-primary focus:outline-none hover: border border-gray-300 rounded-lg"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="" disabled selected>
                  {selectedLabel === "" ? "Choose category" : selectedLabel}
                </option>
                <option value="sales">Sales</option>
                <option value="bouquets">Bouquets</option>
                <option value="indoor-plants">Indoor Plants</option>
              </select>
            </div>
          ) : null}

          {selectedCategory === "sales" && (
            <div className="mb-4">
              <select
                className="w-full cursor-pointer text-[#453A3C] focus:outline-none p-[13px] border border-gray-300 rounded-lg"
                onChange={handleSalesChange}
                value={salesValue}
              >
                <option value="" disabled selected>
                  Sales
                </option>
                <option value="Discount 10%">Discount 10%</option>
                <option value="Discount 20%">Discount 20%</option>
                <option value="Discount 30%">Discount 30%</option>
              </select>
            </div>
          )}

          {selectedCategory === "bouquets" && (
            <div className="mb-4">
              <select
                className="w-full p-[13px] cursor-pointer text-[#453A3C] focus:outline-none border border-gray-300 rounded-lg"
                onChange={handleBouquetsChange}
                value={bouquetsValue}
              >
                <option value="" disabled selected>
                  Bouquets
                </option>
                <option value="Romantic">Romantic</option>
                <option value="Sympathy">Sympathy</option>
                <option value="Congratulations">Congratulations</option>
              </select>
            </div>
          )}

          {selectedCategory === "indoor-plants" && (
            <div className="mb-4">
              <select
                className="w-full p-[13px] cursor-pointer text-[#453A3C] focus:outline-none border border-gray-300 rounded-lg"
                onChange={handleIndoorPlantsChange}
                value={indoorPlantsValue}
              >
                <option value="" disabled selected>
                  Indoor Plants
                </option>
                <option value="Succulents">Succulents</option>
                <option value="Low-Light">Low-Light</option>
                <option value="Pet-Friendly">Pet-Friendly</option>
              </select>
            </div>
          )}
        </div>
      )}
      {selectedLabel && (
        <div className="max-w-md rounded-xl font-primary mt-8">
          <select
            className="w-full text-[#453A3C] p-[13px] font-primary focus:outline-none hover: border
          border-gray-300 rounded-lg"
          >
            <option className="font-primary font-semibold " value="">
              {selectedLabel}
            </option>
          </select>
        </div>
      )}
    </>
  );
};

export default SelectGroup;
