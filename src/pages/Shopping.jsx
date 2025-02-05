import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../context/ContextProvider";
import { cartActions } from "../store/itemsSlice";

const Shopping = () => {
  const { language } = userInfo();
  let confirmMessage =
    language === "arabic"
      ? "هل أنت متأكد من أنك تريد حذف جميع المنتجات ؟"
      : language === "french"
      ? "Êtes-vous sûr de vouloir supprimer tous les produits?"
      : language === "spanish"
      ? "¿Estás seguro de que quieres eliminar todos los productos?"
      : language === "german"
      ? "Möchten Sie wirklich alle Produkte löschen?"
      : "Are you sure you want to delete all products ?";

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);
  function deleteAllProducts() {
    const conf = confirm(confirmMessage);
    if (conf) {
      dispatch(cartActions.deleteAllProducts());
    }
  }
  let shoppingPage =
    language === "arabic"
      ? "صفحة التسوق"
      : language === "french"
      ? "Shopping Page"
      : language === "spanish"
      ? "página de compra"
      : language === "german"
      ? "Shopping-Seite"
      : "Shopping Page";

  let deleteProduct=language === "arabic"
  ? "حذف"
  : language === "french"
  ? "supprimer"
  : language === "spanish"
  ? "eliminar"
  : language === "german"
  ? "löschen"
  : "Delete";
  let deleteAll =
    language === "arabic"
      ? "حذف الكل"
      : language === "french"
      ? "supprimer tous les"
      : language === "spanish"
      ? "eliminar todos"
      : language === "german"
      ? "löschen Sie alle"
      : "Delete All";
      let noProducts=language === "arabic"
      ? "!!!لم يتم العثور على منتجات"
      : language === "french"
      ? "Aucun produit trouvé !!!"
      : language === "spanish"
      ? "No se encontraron productos!!!"
      : language === "german"
      ? "Keine Produkte gefunden!!!"
      : "No Products found !!!";

  return (
    <main className="mt-8">
      <div
        className={`flex items-center justify-between ${
          language === "arabic" ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}
      >
        <h1
          className={`text-logo font-primary my-3   xl:text-3xl text-xl  ${
            language === "arabic" ? "text-right" : "text-left"
          } `}
        >
          {shoppingPage}
        </h1>
        {cart.length >= 1 && (
          <div>
            <button
              onClick={deleteAllProducts}
              className="border font-bold text-xl border-[#979797] p-2 w-fit rounded-lg "
            >
              {deleteAll}
            </button>
          </div>
        )}
      </div>
      {cart.length >= 1 ? (
        <div className=" cardParent  xl:gap-4 gap-2 items-center  mt-5">
        {cart.map((item) => {
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
          function addToCart() {
            dispatch(
              cartActions.addToCart({
                ...item,
              })
            );
          }
          function removeFromCart() {
            dispatch(cartActions.removeFromCart(item.id));
          }
          function deleteProductFromCart() {
            dispatch(cartActions.deleteProductFromCart(item.id));
          }
          return (
            <div
              key={item.id}
              className={`card xl:!h-[340px] !h-[280px] font-primary  ${
                language === "arabic" ? "text-right" : "text-left"
              } flex flex-col justify-center`}
            >
              <h1 className="xl:text-base font-bold text-xs text-nowrap  text-[#453A3C] font-primary">
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
              <div className="flex justify-between mt-[5%] w-full">
                <p className="text-[#979797] font-primary text-nowrap xl:text-base text-xs  ">
                  {itemType}
                </p>
                <h3 className="xl:text-lg text-sm font-primary font-semibold">
                  {item.itemPrice}
                </h3>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex justify-between gap-3">
                  <button onClick={addToCart} className="xl:text-xl text-lg">
                    ➕
                  </button>
                  <button
                    onClick={removeFromCart}
                    className="xl:text-xl text-lg"
                  >
                    ➖
                  </button>
                </div>
                <p className="text-xl font-semibold">
                  {cart.map((addedItem) =>
                    item.id === addedItem.id ? addedItem.quantity : null
                  )}
                </p>
              </div>
              <div className="mt-2">
                <button
                  onClick={deleteProductFromCart}
                  className={`border xl:text-base text-sm  border-[#979797]  rounded-lg ${
                    language === "german" ||
                    language === "spanish" ||
                    language === "french"
                      ? "xl:w-[90px] w-[83px]"
                      : "xl:w-16 w-14 "
                  } `}
                >
                  {deleteProduct}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      ):(
        <>
          <h1 className="md:text-4xl text-3xl text-center mt-8">{noProducts}</h1>
        </>
      )}
    </main>
  );
};

export default Shopping;
