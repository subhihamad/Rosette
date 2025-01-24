import React, { useState } from "react";
import SelectGroup from "../components/SelectGroup";
import ColorsSelector from "../components/ColorsSelector";
import UploadFile from "../components/UploadFile";
import { userInfo } from "../context/ContextProvider";

const AddItem = () => {
  const [itemValues, setItemValues] = useState({
    name: "",
    price: "",
    category: "",
    colors: [],
  });
  const { language } = userInfo();
  const handleSubmit = () => {};
  return (
    <div className={`lg:mt-8 md:ml-[15%] xl:ml-0 `}>
      <section className={`xl:mt-5  mt-2 `}>
        <h1
          className={`text-logo font-primary my-3  xl:text-3xl text-xl  ${
            language === "arabic" ? "text-right" : "text-left"
          } `}
        >
          {language === "arabic"
            ? "أضف عنصر جديد"
            : language === "french"
            ? "Ajouter un nouvel élément"
            : language === "spanish"
            ? "Agregar nuevo elemento"
            : language === "german"
            ? "Neues Element hinzufügen"
            : "Add new item"}
        </h1>
        <form
          className={`flex xl:justify-between  flex-col ${
            language === "arabic" ? "xl:flex-row-reverse" : "xl:flex-row"
          } `}
          method="GET"
          onSubmit={handleSubmit}
        >
          <div
            className={`${language === "arabic" ? "text-right" : "text-left"}`}
          >
            <div className="flex flex-col">
              <label className="font-primary  mb-2 text-xl " htmlFor="text">
                <span
                  className={`text-logo ${
                    language === "arabic" ? "inline-block" : "hidden"
                  }`}
                >
                  *
                </span>{" "}
                {language === "arabic"
                  ? "اسم العنصر"
                  : language === "french"
                  ? "nom de l'élément"
                  : language === "spanish"
                  ? "nombre del artículo"
                  : language === "german"
                  ? "Einzelteilname"
                  : "Item Name"}{" "}
                <span
                  className={`text-logo ${
                    language === "arabic" ? "hidden" : "inline-block"
                  }`}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                required
                placeholder={
                  language === "arabic"
                    ? "مثال:التوليب"
                    : language === "french"
                    ? "exp : Tulipes"
                    : language === "spanish"
                    ? "exp: Tulipanes"
                    : language === "german"
                    ? "exp: Tulpen"
                    : "exp: Tulips"
                }
                name="text"
                id="text"
                value={itemValues.name}
                className={`input-addItem ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
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
                <span
                  className={`text-logo ${
                    language === "arabic" ? "inline-block" : "hidden"
                  }`}
                >
                  *
                </span>{" "}
                {language === "arabic"
                  ? "سعر العنصر"
                  : language === "french"
                  ? "prix de l'objet"
                  : language === "spanish"
                  ? "nombre del artículo"
                  : language === "german"
                  ? "Artikelpreis"
                  : "Item Price"}{" "}
                <span
                  className={`text-logo ${
                    language === "arabic" ? "hidden" : "inline-block"
                  }`}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                required
                placeholder={
                  language === "arabic"
                    ? "مثال:$10"
                    : language === "french"
                    ? "exp : 10 $"
                    : language === "spanish"
                    ? "exp: $10"
                    : language === "german"
                    ? "exp: $10"
                    : "exp: $10"
                }
                name="text"
                id="price"
                value={itemValues.price}
                className={`input-addItem ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
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
            <div
              className={`${
                language === "arabic" ? "flex items-center justify-end" : ""
              }`}
            >
              <button className={`xl:block hidden save-btn `} type="submit">
                {language === "arabic"
                  ? "حفظ"
                  : language === "french"
                  ? "sauver"
                  : language === "spanish"
                  ? "salvar"
                  : language === "german"
                  ? "speichern"
                  : "save"}
              </button>
            </div>
          </div>
          <div
            className={`xl:flex xl:flex-1 xl:justify-center ${
              language === "arabic" ? "text-right" : "text-left"
            } `}
          >
            <UploadFile />
          </div>
          <div className="xl:hidden md:w-3/4 flex justify-center  mt-5">
            <button className=" save-btn " type="submit">
              {language === "arabic"
                ? "حفظ"
                : language === "french"
                ? "sauver"
                : language === "spanish"
                ? "salvar"
                : language === "german"
                ? "speichern"
                : "save"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
