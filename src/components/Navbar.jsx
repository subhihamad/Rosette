import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, Outlet } from "react-router-dom";
import { userInfo } from "../context/ContextProvider";
import ChooseLanguage from "./ChooseLanguage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showMobileMenuList, setShowMobileMenuList] = useState(false);
  const cart = useSelector((state) => state.cart.cartList);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const styles = {
    fontWeight: "bold",
    color: "#AB3333",
  };
  const { language } = userInfo();
  return (
    <>
      <nav
        className={`nav ${
          language === "arabic" ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}
      >
        {isDesktopOrLaptop ? (
          <>
            <h1>
              <Link className="text-logo font-logoIcon text-3xl" to="/">
                Rosette
              </Link>
            </h1>
            <ul
              className={`ul-list ${
                language === "arabic" ? "xl:flex-row-reverse" : "xl:flex-row"
              }`}
            >
              <li>
                <NavLink
                  end
                  style={({ isActive }) => (isActive ? styles : null)}
                  to="dashboard"
                  className="ul-item"
                >
                  {language === "arabic"
                    ? "لوحة التحكم"
                    : language === "french"
                    ? "tableau de bord"
                    : language === "spanish"
                    ? "panel de control"
                    : language === "german"
                    ? "Armaturenbrett"
                    : "Dashboard"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="reports"
                >
                  {language === "arabic"
                    ? "تقارير"
                    : language === "french"
                    ? "rapports"
                    : language === "spanish"
                    ? "informes"
                    : language === "german"
                    ? "reports"
                    : "Reports"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="/items"
                >
                  {language === "arabic"
                    ? "منتجات"
                    : language === "french"
                    ? "items"
                    : language === "spanish"
                    ? "objetos"
                    : language === "german"
                    ? "Gegenstände"
                    : "Items"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="orders"
                >
                  {language === "arabic"
                    ? "طلبات"
                    : language === "french"
                    ? "ordres"
                    : language === "spanish"
                    ? "órdenes"
                    : language === "german"
                    ? "Bestellungen"
                    : "Orders"}
                </NavLink>
              </li>
              <li>
                <ChooseLanguage />
              </li>
            </ul>
          </>
        ) : (
          <>
            <img
              className="w-9 h-9 cursor-pointer"
              src="/Rosette/assets/burger.png"
              alt="burger icon"
              onClick={() => setShowMobileMenuList(true)}
            />
            {showMobileMenuList && (
              <ul
                className={`flex flex-col items-center  p-5 gap-3 bg-black text-white
                w-full max-h-[280px] absolute  z-20 top-0 left-0`}
              >
                <li
                  className="absolute md:left-[93%] left-[90%] top-2 text-2xl font-bold cursor-pointer"
                  onClick={() => setShowMobileMenuList(false)}
                >
                  ❌
                </li>
                <li onClick={() => setShowMobileMenuList(false)}>
                  <NavLink
                    end
                    style={({ isActive }) => (isActive ? styles : null)}
                    to="/"
                    className="ul-item !text-lg"
                  >
                    {language === "arabic"
                      ? "الصفحة الرئيسية"
                      : language === "french"
                      ? "page d'accueil"
                      : language === "spanish"
                      ? "página principal"
                      : language === "german"
                      ? "Startseite"
                      : "Home"}
                  </NavLink>
                </li>
                <li onClick={() => setShowMobileMenuList(false)}>
                  <NavLink
                    style={({ isActive }) => (isActive ? styles : null)}
                    to="dashboard"
                    className="ul-item !text-lg"
                  >
                    {language === "arabic"
                      ? "لوحة التحكم"
                      : language === "french"
                      ? "tableau de bord"
                      : language === "spanish"
                      ? "panel de control"
                      : language === "german"
                      ? "Armaturenbrett"
                      : "Dashboard"}
                  </NavLink>
                </li>
                <li onClick={() => setShowMobileMenuList(false)}>
                  <NavLink
                    style={({ isActive }) => (isActive ? styles : null)}
                    className="ul-item !text-lg"
                    to="reports"
                  >
                    {language === "arabic"
                      ? "تقارير"
                      : language === "french"
                      ? "rapports"
                      : language === "spanish"
                      ? "informes"
                      : language === "german"
                      ? "reports"
                      : "Reports"}
                  </NavLink>
                </li>
                <li onClick={() => setShowMobileMenuList(false)}>
                  <NavLink
                    style={({ isActive }) => (isActive ? styles : null)}
                    className="ul-item !text-lg"
                    to="/items"
                  >
                    {language === "arabic"
                      ? "منتجات"
                      : language === "french"
                      ? "items"
                      : language === "spanish"
                      ? "objetos"
                      : language === "german"
                      ? "Gegenstände"
                      : "Items"}
                  </NavLink>
                </li>
                <li onClick={() => setShowMobileMenuList(false)}>
                  <NavLink
                    style={({ isActive }) => (isActive ? styles : null)}
                    className="ul-item !text-lg"
                    to="orders"
                  >
                    {language === "arabic"
                      ? "طلبات"
                      : language === "french"
                      ? "ordres"
                      : language === "spanish"
                      ? "órdenes"
                      : language === "german"
                      ? "Bestellungen"
                      : "Orders"}
                  </NavLink>
                </li>
                <li>
                  <ChooseLanguage />
                </li>
              </ul>
            )}
          </>
        )}

        <div className={`nav-info ${
          language === "arabic" ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}>
          <div className="notifacation">
            <img
              className="xl:w-8 xl:h-8 w-7 h-7"
              src="/Rosette/assets/bell.png"
            />
          </div>
          <div className="xl:w-12 xl:h-12 w-10 h-10 rounded-full bg-userIcon flex justify-center items-center cursor-pointer ">
            <img
              className="xl:w-8 xl:h-8 w-7 h-7"
              src="/Rosette/assets/user.png"
            />
          </div>
          <Link className="relative" to="shopping">
            <ShoppingCartIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
            {cart.length >= 1 && (
              <span className="block absolute -top-0.5 -right-1 w-3.5 h-3.5 rounded-full bg-[#ab3333]"></span>
            )}
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
