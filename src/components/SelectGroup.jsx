import React, { useEffect, useState } from "react";
import { userInfo } from "../context/ContextProvider";
const SelectGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [salesValue, setSalesValue] = useState("");
  const [bouquetsValue, setBouquetsValue] = useState("");
  const [indoorPlantsValue, setIndoorPlantsValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const { language } = userInfo();

  

  

  const sales =
    language === "arabic"
      ? "مبيعات"
      : language === "french"
      ? "ventes"
      : language === "spanish"
      ? "de ventas"
      : language === "german"
      ? "Vertrieb"
      : "Sales";
  const salesOptions10 =
    language === "arabic"
      ? "خصم %10"
      : language === "french"
      ? "Rabais de 10 %"
      : language === "spanish"
      ? "Descuento 10%"
      : language === "german"
      ? "Rabatt 10%"
      : "Discount 10%";
  const salesOptions20 =
    language === "arabic"
      ? "خصم %20"
      : language === "french"
      ? "Rabais de 20 %"
      : language === "spanish"
      ? "Descuento 20%"
      : language === "german"
      ? "Rabatt 20%"
      : "Discount 20%";
  const salesOptions30 =
    language === "arabic"
      ? "خصم %30"
      : language === "french"
      ? "Rabais de 30 %"
      : language === "spanish"
      ? "Descuento 30%"
      : language === "german"
      ? "Rabatt 30%"
      : "Discount 30%";

  const bouquets =
    language === "arabic"
      ? "باقات"
      : language === "french"
      ? "bouquets"
      : language === "spanish"
      ? "ramos"
      : language === "german"
      ? "Sträuße"
      : "Bouquets";

  const bouquetsRomantic =
    language === "arabic"
      ? "رومانسي"
      : language === "french"
      ? "romantique"
      : language === "spanish"
      ? "romántico"
      : language === "german"
      ? "romantisch"
      : "Romantic";
  const bouquetsSympathy =
    language === "arabic"
      ? "تعاطف"
      : language === "french"
      ? "sympathie"
      : language === "spanish"
      ? "simpatía"
      : language === "german"
      ? "Sympathie"
      : "Sympathy";
  const bouquetsCongratulations =
    language === "arabic"
      ? "تهنئة"
      : language === "french"
      ? "félicitations"
      : language === "spanish"
      ? "felicitaciones"
      : language === "german"
      ? "Glückwunsch"
      : "Congratulations";
  const indoorPlants =
    language === "arabic"
      ? "نباتات داخلية"
      : language === "french"
      ? "plantes d'intérieur"
      : language === "spanish"
      ? "plantas de interior"
      : language === "german"
      ? "Zimmerpflanzen"
      : "Indoor Plants";
  const indoorPlantsSucculents =
    language === "arabic"
      ? "النباتات العصارية"
      : language === "french"
      ? "plantes succulentes"
      : language === "spanish"
      ? "suculentas"
      : language === "german"
      ? "Sukkulenten"
      : "Succulents";
  const indoorPlantsLowLight =
    language === "arabic"
      ? "الإضاءة الخافتة"
      : language === "french"
      ? "à faible luminosité"
      : language === "spanish"
      ? "con poca luz"
      : language === "german"
      ? "wenig Licht"
      : "Low-Light";
  const indoorPlantsPetFriendly =
    language === "arabic"
      ? "الصديقة للحيوانات الأليفة"
      : language === "french"
      ? "acceptant les animaux"
      : language === "spanish"
      ? "que acepta mascotas"
      : language === "german"
      ? "haustierfreundliche"
      : "Pet-Friendly";
      const chooseCategory= language === "arabic"
      ? "اختر الفئة"
      : language === "french"
      ? "Choisir une catégorie"
      : language === "spanish"
      ? "Elegir categoría"
      : language === "german"
      ? "Kategorie wählen"
      : "Choose category"
      

      useEffect(()=>{
        setSelectedCategory('');
        setSelectedLabel('');
      },[language])

      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedLabel("");
      };

        const handleSalesChange = (event) => {
          setSalesValue(event.target.value);
          setSelectedLabel(`${sales}:${event.target.value}`);
        };
      
        const handleBouquetsChange = (event) => {
          setBouquetsValue(event.target.value);
          setSelectedLabel(`${bouquets}:${event.target.value}`);
        };
      
        const handleIndoorPlantsChange = (event) => {
          setIndoorPlantsValue(event.target.value);
          setSelectedLabel(`${indoorPlants}:${event.target.value}`);
        };
  

  return (
    <>
      {!selectedLabel && (
        <div className={`xl:max-w-md md:mx-w-[75%]  rounded-xl  font-primary mt-8 ${
          language === "arabic" ? "text-right" : "text-left"
        }`}>
          {selectedCategory === "" ? (
            <div className="mb-4">
              <select
                id="parent-select"
                className={`select-item ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="" disabled selected>
                  {chooseCategory}
                </option>
                <option value={sales}>{sales}</option>
                <option value={bouquets}>{bouquets}</option>
                <option value={indoorPlants}>{indoorPlants}</option>
              </select>
            </div>
          ) : null}

          {selectedCategory === `${sales}` && (
            <div className="mb-4">
              <select
                className={`select-item ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={handleSalesChange}
                value={salesValue}
              >
                <option value="" disabled selected>
                  {sales}
                </option>
                <option value={salesOptions10}>{salesOptions10}</option>
                <option value={salesOptions20}>{salesOptions20}</option>
                <option value={salesOptions30}>{salesOptions30}</option>
              </select>
            </div>
          )}

          {selectedCategory === `${bouquets}` && (
            <div className="mb-4">
              <select
                className={`select-item ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={handleBouquetsChange}
                value={bouquetsValue}
              >
                <option value="" disabled selected>
                  {bouquets}
                </option>
                <option value={bouquetsRomantic}>{bouquetsRomantic}</option>
                <option value={bouquetsSympathy}>{bouquetsSympathy}</option>
                <option value={bouquetsCongratulations}>
                  {bouquetsCongratulations}
                </option>
              </select>
            </div>
          )}

          {selectedCategory === `${indoorPlants}` && (
            <div className="mb-4">
              <select
                className={`select-item ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={handleIndoorPlantsChange}
                value={indoorPlantsValue}
              >
                <option value="" disabled selected>
                  {indoorPlants}
                </option>
                <option value={indoorPlantsSucculents}>
                  {indoorPlantsSucculents}
                </option>
                <option value={indoorPlantsLowLight}>
                  {indoorPlantsLowLight}
                </option>
                <option value={indoorPlantsPetFriendly}>
                  {indoorPlantsPetFriendly}
                </option>
              </select>
            </div>
          )}
        </div>
      )}
      {selectedLabel && (
        <div className="rounded-xl font-primary mt-8">
          <select className={`select-item ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}>
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
