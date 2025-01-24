import React, { useEffect } from "react";
import { userInfo } from "../context/ContextProvider";

const UploadFile = () => {
  const { language } = userInfo();
  useEffect(() => {
    let imgUpload = document.getElementById("img_upload");
    let image = document.getElementById("img");
    console.log(imgUpload, image);
    function upload(typeUpload, element) {
      typeUpload.onchange = function () {
        let file = new FileReader();
        file.readAsDataURL(typeUpload.files[0]);
        file.onload = function () {
          element.src = file.result;
          element.style.display = "block";
        };
      };
    }
    upload(imgUpload, image);
  }, []);

  const uploadFilelabel =
    language === "arabic"
      ? "تحميل الصورة"
      : language === "french"
      ? "Télécharger la photo"
      : language === "spanish"
      ? "Cargar foto de artículo"
      : language === "german"
      ? "Upload Artikelfoto"
      : "Upload item photo";

  return (
    <div className={`mt-8`}>
      <div
        className={`flex  flex-nowrap ${
          language === "arabic" ? "justify-end" : "justify-start"
        }`}
      >
        <label htmlFor="img_upload" className="flex cursor-pointer">
          <img
            className={`w-7 h-7 ${language === "arabic" ? "block" : "hidden"} `}
            src="/Rosette/assets/arrow.png"
            alt="upload"
          />
          <h2 className="text-xl mr-5 ml-5 font-primary ">{uploadFilelabel}</h2>
          <img
            className={`w-7 h-7 ${language === "arabic" ? "hidden" : "block"} `}
            src="/Rosette/assets/arrow.png"
            alt="upload"
          />
        </label>
        <input
          type="file"
          className="file-input"
          id="img_upload"
          accept="image/*"
        />
      </div>
      <div className="box mt-8">
        <img id="img" className="object-contain" alt="" />
      </div>
    </div>
  );
};

export default UploadFile;
