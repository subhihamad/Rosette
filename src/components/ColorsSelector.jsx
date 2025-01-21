import React, { useState } from "react";
import { userInfo } from "../context/ContextProvider";

const ColorsSelector = () => {
  const [showPalette, setShowPalette] = useState(false);
  const [colorsBox, setColorsBox] = useState([]);
  const {language}=userInfo();
  console.log(colorsBox);
  const colors = [
    "#FFFFFF",
    "#8B0000",
    "#FF0000",
    "#FF4500",
    "#FF6347",
    "#FFDAB9",
    "#F5F5DC",
    "#800080",
    "#A020F0",
    "#9370DB",
    "#D8BFD8",
    "#FFB6C1",
    "#FFA07A",
    "#006400",
    "#008000",
    "#90EE90",
    "#98FB98",
    "#F0FFF0",
    "#BDB76B",
    "#FFFF00",
    "#FFD700",
    "#FFFFE0",
    "#FFFACD",
    "#FFFDD0",
    "#00008B",
    "#0000FF",
    "#ADD8E6",
  ];

  const colorLabel=language === "arabic"
  ? "حدد ألوان المنتج"
  : language === "french"
  ? "Sélectionner les couleurs de l’élément"
  : language === "spanish"
  ? "Seleccionar los colores de los elementos"
  : language === "german"
  ? "Wählen Sie die Farben des Objekts"
  : "Selecte item colors"

  return (
    <div className={`xl:max-w-md relative rounded-xl  font-primary mt-8 ${
      language === "arabic" ? "text-right" : "text-left"
    }`}>
      <select
        className={`select-item ${
          language === "arabic" ? "text-right" : "text-left"
        }`}
        onClick={() => setShowPalette(!showPalette)}
      >
        <option className="text-xl text-[#453A3C]" value="">
          {colorLabel}
        </option>
      </select>

      {showPalette && (
        <div
          className="grid gap-1 border-2 border-[#E3E2E0] p-2 rounded-lg  xl:absolute w-fit xl:left-full"
          style={{ gridTemplateColumns: "repeat(7, 30px)" }}  
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-7 h-7 border rounded-md shadow-md cursor-pointer transform transition-transform hover:scale-105"
              style={{ backgroundColor: color }}
              onClick={() => setColorsBox((prev) => [...prev, color])}
            ></div>
          ))}
        </div>
      )}
      {colorsBox && (
        <div className="flex mt-5">
          {colorsBox.map((color, index) => (
            <div
              key={index}
              className="w-7 h-7 mr-2 border rounded-md shadow-md"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorsSelector;
