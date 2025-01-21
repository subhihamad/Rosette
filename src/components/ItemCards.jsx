import React from "react";
import { productItems } from "../constants";
import { userInfo } from "../context/ContextProvider";

const ItemCards = () => {
  const { language } = userInfo();
  return (
    <>
      {productItems.map((item) => (
        <div
          key={item.id}
          className={`card font-primary  ${
            language === "arabic" ? "text-right" : "text-left"
          } flex flex-col justify-center  animate-move`}
        >
          <h1 className="xl:text-base font-bold text-xs text-nowrap  text-[#453A3C] font-primary">
            {language === "arabic"
              ? item.itemNameArabic
              : language === "french"
              ? item.itemNameFrench
              : language === "spanish"
              ? item.itemNameSpanish
              : language === "german"
              ? item.itemNameGerman
              : item.itemName}
          </h1>
          <p className="text-[#979797] xl:text-[15px] mt-1 xl:text-base text-xs ">
          {language === "arabic"
              ? item.itemTypeNameArabic
              : language === "french"
              ? item.itemTypeNameFrench
              : language === "spanish"
              ? item.itemTypeNameSpanish
              : language === "german"
              ? item.itemTypeNameGerman
              : item.itemTypeName}
          </p>
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
            <p className="text-[#979797] font-primary text-nowrap xl:text-base text-xs  ">
            {language === "arabic"
              ? item.itemTypeArabic
              : language === "french"
              ? item.itemTypeFrench
              : language === "spanish"
              ? item.itemTypeSpanish
              : language === "german"
              ? item.itemTypeGerman
              : item.itemType}
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
