import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, Outlet } from "react-router-dom";
import { userInfo } from "../context/ContextProvider";
import ChooseLanguage from "./ChooseLanguage";

const Navbar = () => {
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
                  to="dashoard"
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
              {/* <li>
                <NavLink
              style={({ isActive }) => (isActive ? styles : null)}
              className="ul-item"
              to='users'
            >
              Users
            </NavLink>
              </li> */}
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
            />
             <Link className="text-logo font-logoIcon text-lg" to="/">
                Rosette
              </Link>
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
            <ChooseLanguage />
          </>
        )}

        <div className="nav-info">
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
