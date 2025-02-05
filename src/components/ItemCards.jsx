import React, { useEffect } from "react";
import { productItems } from "../constants";
import { userInfo } from "../context/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/itemsSlice";

const ItemCards = () => {
  const { language } = userInfo();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartList);
  console.log(cart);
  return (
    <>
      {productItems.map((item, index) => {
        let itemName =
          language === "arabic"
            ? item.itemNameArabic
            : language === "french"
            ? item.itemNameFrench
            : language === "spanish"
            ? item.itemNameSpanish
            : language === "german"
            ? item.itemNameGerman
            : item.itemName;
        let itemTypeName =
          language === "arabic"
            ? item.itemTypeNameArabic
            : language === "french"
            ? item.itemTypeNameFrench
            : language === "spanish"
            ? item.itemTypeNameSpanish
            : language === "german"
            ? item.itemTypeNameGerman
            : item.itemTypeName;
        let itemType =
          language === "arabic"
            ? item.itemTypeArabic
            : language === "french"
            ? item.itemTypeFrench
            : language === "spanish"
            ? item.itemTypeSpanish
            : language === "german"
            ? item.itemTypeGerman
            : item.itemType;
        let add =
          language === "arabic"
            ? "إضافة"
            : language === "french"
            ? "ajouter"
            : language === "spanish"
            ? "añadir"
            : language === "german"
            ? "hinzufügen"
            : "Add";
        let buy =
          language === "arabic"
            ? "شراء"
            : language === "french"
            ? "acheter"
            : language === "spanish"
            ? "comprar"
            : language === "german"
            ? "kaufen"
            : "Buy";
        function addToCart() {
          dispatch(
            cartActions.addToCart({
              ...item,
            })
          );
        }

        useEffect(() => {
          cart.length >= 1
            ? cart.map((addedItem) => {
                if (item.id === addedItem.id && addedItem.quantity >= 1) {
                  document.getElementById(`btn-${index}`).innerHTML = add;
                } else if (
                  item.id !== addedItem.id &&
                  addedItem.quantity === 0
                ) {
                  document.getElementById(`btn-${index}`).innerHTML = buy;
                }
              })
            : (document.getElementById(`btn-${index}`).innerHTML = buy);
        }, [cart, language]);

        return (
          <div
            key={item.id}
            className={`card font-primary  ${
              language === "arabic" ? "text-right" : "text-left"
            } flex flex-col justify-center  animate-move`}
          >
            <h1 className="xl:text-base font-bold text-[13px] text-nowrap  text-[#453A3C] font-primary">
              {itemName}
            </h1>
            <p className="text-[#979797] xl:text-[15px] mt-1 xl:text-base text-xs ">
              {itemTypeName}
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
            <div className="flex justify-between mt-[8%] w-full">
              <p className="text-[#979797] font-primary text-nowrap xl:text-base text-[13px]  ">
                {itemType}
              </p>
              <h3 className="xl:text-lg text-sm font-primary font-semibold">
                {item.itemPrice}
              </h3>
            </div>
            <div className="flex w-full justify-between mt-2">
              <button
                onClick={addToCart}
                id={`btn-${index}`}
                className={`border border-[#979797] xl:text-base text-sm  py-[1px]  rounded-lg ${
                  language === "german" ||
                  language === "spanish" ||
                  language === "french"
                    ? "xl:w-[85px] w-[83px]"
                    : "xl:w-16 w-14 "
                } `}
              >
                {buy}
              </button>
              <div className="flex gap-2">
                <p className="text-xl font-semibold">
                  {cart.map((addedItem) =>
                    item.id === addedItem.id ? addedItem.quantity : null
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemCards;
