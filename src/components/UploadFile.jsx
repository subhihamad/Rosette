import React, { useEffect } from "react";

const UploadFile = () => {
    
    useEffect(()=>{
        let imgUpload = document.getElementById("img_upload");
        let image = document.getElementById("img");
        console.log(imgUpload , image);
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
    },[])
    
        

  return (
    <div className="mt-8">
      <div>
        <label htmlFor="img_upload" className="flex cursor-pointer">
          <h2 className="text-xl mr-5 font-primary ">Upload item photo</h2>
          <img className="w-7 h-7" src="/Rosette/assets/arrow.png" alt="upload" />
        </label>
        <input type="file" className="file-input" id="img_upload" accept="image/*" />
        <div className="box">
          <img id="img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
