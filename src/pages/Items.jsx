import {useState } from "react";
import { Link } from "react-router-dom";
import SelectType from "../components/SelectType";
import SearchIcon from "@mui/icons-material/Search";
import ItemCards from "../components/ItemCards";
import { MenuItem } from "@mui/material";
import { userInfo } from "../context/ContextProvider";
const Items = () => {
  const [value, setValue] = useState("");
  const {language} = userInfo();

  return (
    <main className="xl:mt-8">
      <div className="flex flex-wrap xl:justify-between items-center">
        <div className="flex flex-1 max-xl:my-5 items-center max-xl:justify-between gap-10">
          <p className="text-logo font-primary text-nowrap xl:text-lg text-sm">
            <Link to="addItem">
              <span className="mr-2 ">+</span>
              {language === "arabic"
                ? "إضافة منتج"
                : language === "french"
                ? "Ajouter un élément"
                : language === "spanish"
                ? "Agregar elemento"
                : language === "german"
                ? "Element hinzufügen"
                : "Add item"}
            </Link>
          </p>
          <SelectType
            style={{
              borderRadius: "15px",
              width: "190px",
              height: "50px",
              borderColor: "#E3E2E0",
              color: "#979797",
              textAlign: "center",
              fontFamily: "Lucida Bright",
              fontSize: "18px",

            }}
          >
            <MenuItem value="">
              <em>
                {language === "arabic"
                  ? "جميع المنتجات"
                  : language === "french"
                  ? "tous les produits"
                  : language === "spanish"
                  ? "todos los productos"
                  : language === "german"
                  ? "alle Produkte"
                  : "All Products"}
              </em>
            </MenuItem>
            <MenuItem value={"sales"}>
              {language === "arabic"
                ? "مبيعات"
                : language === "french"
                ? "ventes"
                : language === "spanish"
                ? "de ventas"
                : language === "german"
                ? "Vertrieb"
                : "Sales"}
            </MenuItem>
            <MenuItem value={"bouquets"}>
              {language === "arabic"
                ? "باقات"
                : language === "french"
                ? "bouquets"
                : language === "spanish"
                ? "ramos"
                : language === "german"
                ? "Sträuße"
                : "Bouquets"}
            </MenuItem>
            <MenuItem value={"indoorPlants"}>
              {language === "arabic"
                ? "نباتات داخلية"
                : language === "french"
                ? "plantes d'intérieur"
                : language === "spanish"
                ? "plantas de interior"
                : language === "german"
                ? "Indoor Pflanzen"
                : "Indoor Plants"}
            </MenuItem>
          </SelectType>
        </div>
        <div className={`border w-full border-[#E3E2E0] xl:mb-0 mb-5 xl:w-[350px] p-2 rounded-[15px] ${
              language === "arabic" ? "text-right" : "text-left"
            }`}>
          <SearchIcon sx={{ color: "#979797", marginRight: "5px" }} />
          <input
            className={`focus:outline-none font-primary w-[90%] ${
              language === "arabic" ? "text-right" : "text-left"
            }`}
            type="search"
            placeholder={
              language === "arabic"
                ? "البحث عن أنواع الزهور"
                : language === "french"
                ? "Recherche Types de fleurs"
                : language === "spanish"
                ? "Buscar tipos de flores"
                : language === "german"
                ? "Suche Arten von Blumen"
                : "Search Flower Types"
            }
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
