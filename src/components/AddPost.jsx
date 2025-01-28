import React, { useState } from "react";
import { userInfo } from "../context/ContextProvider";
import { useNavigate } from "react-router";



const AddPost = () => {
  const { language, setPostRequest } = userInfo();
  const navigate=useNavigate();
  const [postValues, setPostValues] = useState({
    userId: "",
    tilte: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const dataPost = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: parseInt(postValues.userId),
        title: postValues.tilte,
        body: postValues.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await dataPost.json();
    setPostRequest(data);
    setIsLoading(false);
    postValues.userId = "";
    postValues.tilte = "";
    postValues.body = "";
    navigate('/');
  };
  return (
    <div className={`lg:mt-8 md:ml-[15%] xl:ml-0 `}>
      <h1
        className={`text-logo font-primary my-3  xl:text-3xl text-xl  ${
          language === "arabic" ? "text-right" : "text-left"
        } `}
      >
        {language === "arabic"
          ? "أضف عنصر جديد"
          : language === "french"
          ? "Ajouter un nouveau poste"
          : language === "spanish"
          ? "Add New Post"
          : language === "german"
          ? "Neuen Beitrag hinzufügen"
          : "Add new post"}
      </h1>
      <form
        className={`flex flex-col ${language === "arabic" ? "items-end" : ""} `}
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
                ? "معرف مستخدم"
                : language === "french"
                ? "ID utilisateur"
                : language === "spanish"
                ? "identificación de usuario"
                : language === "german"
                ? "Benutzer-ID"
                : "User Id"}{" "}
              <span
                className={`text-logo ${
                  language === "arabic" ? "hidden" : "inline-block"
                }`}
              >
                *
              </span>
            </label>
            <div className="w-full">
              <input
                type="text"
                required
                name="userId"
                id="text"
                value={postValues.userId}
                className={`input-addPost`}
                onChange={(e) =>
                  setPostValues((prev) => {
                    return {
                      ...prev,
                      userId: e.target.value,
                    };
                  })
                }
              />
            </div>
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
                ? "عنوان"
                : language === "french"
                ? "titre"
                : language === "spanish"
                ? "título"
                : language === "german"
                ? "Titel"
                : "title"}{" "}
              <span
                className={`text-logo ${
                  language === "arabic" ? "hidden" : "inline-block"
                }`}
              >
                *
              </span>
            </label>
            <div>
              <input
                type="text"
                required
                name="name"
                id="price"
                value={postValues.tilte}
                className={`input-addPost ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={(e) =>
                  setPostValues((prev) => {
                    return {
                      ...prev,
                      tilte: e.target.value,
                    };
                  })
                }
              />
            </div>
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
                ? "محتوى الوثيقة"
                : language === "french"
                ? "le contenu du document"
                : language === "spanish"
                ? "contenido del documento"
                : language === "german"
                ? "den Inhalt des Dokuments"
                : "content of the document"}{" "}
              <span
                className={`text-logo ${
                  language === "arabic" ? "hidden" : "inline-block"
                }`}
              >
                *
              </span>
            </label>
            <div>
              <input
                type="text"
                required
                name="body"
                id="price"
                value={postValues.body}
                className={`input-addPost ${
                  language === "arabic" ? "text-right" : "text-left"
                }`}
                onChange={(e) =>
                  setPostValues((prev) => {
                    return {
                      ...prev,
                      body: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
        </div>
        <div
          className={`xl:flex xl:flex-1 xl:justify-center ${
            language === "arabic" ? "text-right" : "text-left"
          } `}
        ></div>
        <div
          className={` ${
            language === "arabic" ? " xl:mr-0 md:mr-[10%] xl:justify-end" : ""
          } w-full flex xl:justify-start  justify-center  mt-5`}
        >
          <button
            disabled={isLoading}
            className={`  save-btn ${isLoading ? "opacity-50" : "opacity-100"}`}
            type="submit"
          >
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
    </div>
  );
};

export default AddPost;
