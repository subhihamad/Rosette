import React from "react";
import { productItems } from "../constants";

const ItemCards = () => {
  return (
    <>
      {productItems.map((item) => (
        <div key={item.id} className="card font-primary flex flex-col justify-center  animate-move">
          <h1 className="xl:text-lg text-sm text-nowrap text-[#453A3C] font-primary font-semibold">
            {item.itemName}
          </h1>
          <p className="text-[#979797] xl:text-lg text-sm ">{item.itemTypeName}</p>
          <div className="relative flex justify-center  items-center">
            <img
              className="xl:max-w-[230px] xl:max-h-[150px] max-w-[200px] max-h-[125px]  h-fit"
              src={item.itemIamge}
              alt={`img-${item.id}`}
            />
            <div className="absolute -right-3 top-10 flex flex-col justify-between h-[50px]">
              <span
                className="rose-colors"
                style={{ backgroundColor: `${item.colors[0]}` }}
              ></span>
              <span
                className="rose-colors"
                style={{ backgroundColor: `${item.colors[1]}` }}
              ></span>
              <span
                className="rose-colors"
                style={{ backgroundColor: `${item.colors[2]}` }}
              ></span>
            </div>
            
          </div>
          <div className="flex justify-between mt-[5%] w-full">
              <p className="text-[#979797] font-primary xl:text-lg text-sm">
                {item.itemType}
              </p>
              <h3 className="xl:text-lg text-sm font-primary font-semibold">
                {item.itemPrice}
              </h3>
            </div>
        </div>
      ))}
    </>
  );
};

export default ItemCards;
